import { MessageBot } from '@bhmb/bot'
import { UIExtensionExports } from '@bhmb/ui'

// Remove for production
import css from '../style.css'
import { QuestsTab } from './quests-tab'
import { InfoTab } from './info-tab'
import { UsersTab } from './users-tab'
import { LogTab } from './log-tab'
document.head.appendChild(document.createElement('style')).textContent = css

const TAB_GROUP = 'quests'

MessageBot.registerExtension('bibliofile/quests', ex => {
  const ui = ex.bot.getExports('ui') as UIExtensionExports | undefined
  if (!ui) return

  ui.addTabGroup('Quests', TAB_GROUP)

  const infoTab = new InfoTab(ui.addTab('Info', TAB_GROUP))
  const questsTab = new QuestsTab(ex, ui, ui.addTab('Quests', TAB_GROUP))
  const usersTab = new UsersTab(ui.addTab('Users', TAB_GROUP), ex)
  const logTab = new LogTab(ui.addTab('Log', TAB_GROUP), ex)

  ex.remove = () => {
    ui.removeTabGroup(TAB_GROUP)
  }
})
