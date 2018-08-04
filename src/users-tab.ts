import { MessageBotExtension } from '@bhmb/bot'
import html from './users-tab.html'

const KEY = 'users'
const INVALID_NAME = 'QUESTS_INVALID_NAME'
const INVALID_USER = { xp: -Infinity, completed: [], questmaster: false }

export interface User {
  xp: number
  questmaster: boolean
  completed: number[]
}

export interface Users {
  [name: string]: User
}

export class UsersTab {
  container: HTMLElement
  ex: MessageBotExtension
  resultsEl: HTMLOListElement

  constructor (container: HTMLElement, ex: MessageBotExtension) {
    this.container = container
    this.ex = ex
    container.innerHTML = html
    this.resultsEl = container.querySelector('ol')!

    const input = container.querySelector('input')!
    input.addEventListener('input', () => this.filter(input.value))

    container.querySelector('.button')!.addEventListener('click', () => {
      this.rebuildList()
      this.filter(input.value)
    })
    this.rebuildList()

    container.addEventListener('change', event => {
      const target = event.target as HTMLInputElement
      if (target.type === 'checkbox') {
        const name = target.parentElement!.parentElement!.querySelector('span')!.textContent!
        const users = this.getUsers()
        users[name].questmaster = target.checked
        this.setUsers(users)
      }
    })
  }

  getUsers = () => this.ex.storage.get<Users>(KEY, { [INVALID_NAME]: INVALID_USER })
  setUsers = (users: Users) => {
    users[INVALID_NAME] = INVALID_USER
    this.ex.storage.set(KEY, users)
  }
  getUser = (name: string): User => this.getUsers()[name] || this.getUser(INVALID_NAME)

  filter (search: string) {
    search = search.toLocaleUpperCase()

    this.resultsEl.querySelectorAll('li').forEach(el => {
      const name = el.querySelector('span')!.textContent!
      el.style.display = name.includes(search) ? '' : 'none'
    })
  }

  rebuildList () {
    this.resultsEl.innerHTML = ''
    const users = this.getUsers()

    Object.keys(users)
      .filter(name => name !== INVALID_NAME)
      .sort((a, b) => users[b].xp - users[a].xp)
      .forEach(name => {
        const li = this.resultsEl.appendChild(document.createElement('li'))

        const span = li.appendChild(document.createElement('span'))
        span.textContent = name

        li.appendChild(document.createTextNode(` (xp: ${users[name].xp})`))

        const label = li.appendChild(document.createElement('label'))
        label.appendChild(document.createTextNode(' Quest Master: '))

        const checkbox = label.appendChild(document.createElement('input'))
        checkbox.type = 'checkbox'
        checkbox.checked = users[name].questmaster
      })
  }
}
