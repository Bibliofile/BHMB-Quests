import { MessageBotExtension } from '@bhmb/bot'
import html from './log-tab.html'

const KEY = 'log'

export interface LogEntry {
  message: string
  timestamp: number
  user: string
}

export type Logs = LogEntry[]

export function addLogEntry (ex: MessageBotExtension, entry: Pick<LogEntry, 'message' | 'user'>) {
  const logs = ex.storage.get<Logs>(KEY, []).concat({ timestamp: Date.now(), ...entry })
  ex.storage.set(KEY, logs)
}

export class LogTab {
  ex: MessageBotExtension
  container: HTMLElement
  logContainer: HTMLOListElement

  constructor (container: HTMLElement, ex: MessageBotExtension) {
    this.container = container
    this.ex = ex

    container.innerHTML = html
    this.logContainer = container.querySelector('ol')!

    const input = container.querySelector('input')!
    input.addEventListener('input', () => this.filter(input.value))

    container.querySelector('.is-primary')!.addEventListener('click', () => {
      this.refreshList()
      this.filter(input.value)
    })

    container.querySelector('.is-danger')!.addEventListener('click', () => {
      this.ex.storage.set(KEY, [])
      addLogEntry(this.ex, { message: 'Cleared logs', user: 'SERVER' })
      this.refreshList()
    })
  }

  getLogs = () => this.ex.storage.get<Logs>(KEY, [])

  filter (search: string) {
    search = search.toLocaleUpperCase()

    this.logContainer.querySelectorAll('li').forEach(el => {
      const name = el.dataset.name!
      el.style.display = name.includes(search) ? '' : 'none'
    })
  }

  refreshList () {
    this.logContainer.innerHTML = ''
    this.getLogs().forEach(log => {
      const li = this.logContainer.appendChild(document.createElement('li'))
      li.dataset.name = log.user
      const date = new Date(log.timestamp)
      li.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()} ${log.user} - ${log.message}`
    })
  }
}
