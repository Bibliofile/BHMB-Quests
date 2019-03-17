import { World, MessageBotExtension } from '@bhmb/bot'
import { getUsers, getUser, setUsers, INVALID_NAME } from './users-tab'
import { QuestListing } from './quest'
import { getList, getQuests } from './quests-tab'
import { getLevels, Level } from './levels-tab'
import { addLogEntry } from './log-tab'

const match = (r: RegExp, s: string) => (s.match(r) || []).slice(1) as Array<string | undefined>

function getAvailableQuests (ex: MessageBotExtension, completed: number[]): QuestListing[] {
  const list = getList(ex)
  const available: QuestListing[] = []

  while (list.length) {
    const quest = list.shift()!
    if (completed.includes(quest.id)) {
      list.unshift(...quest.children)
    } else {
      available.push(quest)
    }
  }

  return available
}

function checkLevelUp (ex: MessageBotExtension, userXP: number, xpGain: number, name: string) {
  const levels = getLevels(ex)

  while (levels.length && levels[0].xp <= userXP) {
    userXP -= levels[0].xp
    levels.shift()
  }

  while (levels.length && levels[0].xp < userXP + xpGain) {
    xpGain -= levels[0].xp - userXP
    userXP = 0
    if (levels[0].onLevelUp) {
      ex.bot.send(levels[0].onLevelUp, { name })
      levels.shift()
    }
  }
}

function displayQuests (ex: MessageBotExtension, name: string) {
  const user = getUser(ex, name)
  const quests = getQuests(ex)
  const available = getAvailableQuests(ex, user.completed)

  if (available.length === 0) {
    ex.bot.send('No available quests.')
    return
  }

  const message = ['Available quests:']
  for (let i = 0; i < Math.min(5, available.length); i++) {
    const quest = quests.find(q => q.id === available[i].id)!
    message.push(`${quest.name} (${quest.xp} xp)`)
  }
  ex.bot.send(message.join('\n'))
}

export function addCommands (ex: MessageBotExtension, world: World) {
  world.addCommand('xp', (player, args) => {
    const users = getUsers(ex)
    const sender = getUser(ex, player.name)
    if (!player.isOwner && !sender.questmaster) return
    const [ name = '', amount = '0' ] = match(/^(.*?) ([+-]?\d+)$/, args)
    const normalizedName = name.toLocaleUpperCase()
    const numericAmount = parseInt(amount, 10)

    // Player hasn't completed any quests
    if (!users[normalizedName]) {
      return ex.bot.send(`Cannot modify xp of <${normalizedName}>, no quests have been completed.`)
    }

    const oldXP = users[normalizedName].xp

    if (numericAmount < 0) {
      // xp cannot be negative
      users[normalizedName].xp = Math.min(0, oldXP - numericAmount)
    } else {
      checkLevelUp(ex, oldXP, numericAmount, normalizedName)
      const willOverflow = Number.MAX_SAFE_INTEGER - numericAmount < oldXP
      users[normalizedName].xp = willOverflow ? Number.MAX_SAFE_INTEGER : oldXP + numericAmount
    }
    setUsers(ex, users)

    ex.bot.send(`Updated ${normalizedName}'s xp to ${users[normalizedName].xp}`)
    addLogEntry(ex, {
      message: `Updated ${normalizedName}'s xp to ${users[normalizedName].xp} (was ${oldXP})`,
      user: player.name
    })
  })

  world.addCommand('quests', ({ name }) => displayQuests(ex, name))

  world.addCommand('quest', ({ name }, questName) => {
    if (!questName) {
      return displayQuests(ex, name)
    }

    const quest = getQuests(ex).find(q => q.name.toLocaleUpperCase() === questName.toLocaleUpperCase())
    if (!quest) {
      ex.bot.send(`That quest doesn't exist.`)
      return
    }

    const { completed } = getUser(ex, name)
    if (completed.includes(quest.id)) {
      ex.bot.send(`You have already completed that quest.`)
      return
    }

    const available = getAvailableQuests(ex, completed)
    if (available.some(({ id }) => id === quest.id)) {
      ex.bot.send(quest.description)
    } else {
      ex.bot.send(`You haven't unlocked that quest yet.`)
    }
  })

  world.addCommand('code', ({ name }, code) => {
    const users = getUsers(ex)
    if (!users[name]) {
      users[name] = {
        completed: [],
        xp: 0,
        questmaster: false
      }
    }

    const quest = getQuests(ex).find(q => q.code.toLocaleUpperCase() === code.toLocaleUpperCase())
    if (!quest) {
      ex.bot.send(`No quest with that code exists.`)
      return
    }

    if (users[name].completed.includes(quest.id)) {
      ex.bot.send(`You've already completed that quest.`)
      return
    }

    const available = getAvailableQuests(ex, users[name].completed)
    if (!available.some(q => q.id === quest.id)) {
      ex.bot.send(`You can't complete that quest... yet`)
      return
    }

    checkLevelUp(ex, users[name].xp, quest.xp, name)
    const willOverflow = Number.MAX_SAFE_INTEGER - quest.xp < users[name].xp
    users[name].xp = willOverflow ? Number.MAX_SAFE_INTEGER : users[name].xp + quest.xp
    users[name].completed.push(quest.id)
    setUsers(ex, users)

    const message = quest.completeMessage || `Quest complete! Gained {{xp}} xp.`

    ex.bot.send(message, {
      xp: quest.xp.toString(),
      title: quest.name,
      description: quest.description,
      name
    })
    addLogEntry(ex, { message: `Completed the ${quest.name} quest`, user: name })
  })

  world.addCommand('level', ({ name, isOwner }, target) => {
    const levels = getLevels(ex)
    let user = getUser(ex, name)
    if ((isOwner || user.questmaster) && target) {
      user = { ...getUser(ex, target.toLocaleUpperCase()) }
      user.xp = Math.max(user.xp, 0) // In case the user doesn't exist
      name = target.toLocaleUpperCase()
    }

    let xp = user.xp
    let currentLevel: Level | undefined = levels[0]

    while (levels.length && levels[0].xp <= xp) {
      xp -= levels[0].xp
      currentLevel = levels.shift()
    }

    if (currentLevel) {
      ex.bot.send(` {{Name}}'s level: {{title}}\nxp: {{xp}}`, {
        name,
        title: currentLevel.title,
        xp: Math.max(user.xp, 0).toString()
      })
    }
  })

  world.addCommand('leveltop', () => {
    const users = getUsers(ex)
    const top = Object.keys(users)
      .sort((a, b) => users[b].xp - users[a].xp)
      .slice(0, 10) // Todo: #1
      .filter(name => name !== INVALID_NAME)

    const lines = ['Top Players:']
    for (const name of top) {
      lines.push(`${name} - ${users[name].xp} xp`)
    }
    ex.bot.send(lines.join('\n'))
  })
}

export function removeCommands (world: World) {
  const commands = [
    'xp',
    'quests',
    'quest',
    'code',
    'leveltop'
  ]
  for (const command of commands) {
    world.removeCommand(command)
  }
}
