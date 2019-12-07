import html from './quests-tab.html'
import { MessageBotExtension } from '@bhmb/bot'
import { QuestList, Quest, QuestListing } from './quest'
import dragula, { Drake } from 'dragula'
import { UIExtensionExports } from '@bhmb/ui'

const defaultQuests: Quest[] = []
const defaultQuestOrder: QuestList = defaultQuests.map(q => ({ id: q.id, children: [] }))

function createEl<K extends keyof HTMLElementTagNameMap>
  (parent: HTMLElement, name: K, ...classes: string[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(name)
  el.classList.add(...classes)
  return parent.appendChild(el)
}

export function getDescendentIds (quest: QuestListing): number[] {
  return quest.children.reduce<number[]>(function getIds (carry, child): number[] {
    return carry.concat([child.id], child.children.reduce(getIds, []))
  }, [])
}

export function getQuests (ex: MessageBotExtension) {
  return ex.storage.get('quests', defaultQuests)
}

export function getList (ex: MessageBotExtension) {
  return ex.storage.get('order', defaultQuestOrder)
}

export class QuestsTab {
  container: HTMLDivElement
  ex: MessageBotExtension
  ui: UIExtensionExports
  drake: Drake | undefined
  selectedIdPath: number[] = []

  constructor (ex: MessageBotExtension, ui: UIExtensionExports, container: HTMLDivElement) {
    this.ex = ex
    this.ui = ui
    this.container = container
    container.innerHTML = html
    this.rebuildList()

    this.container.addEventListener('input', () => {
      this.save()
    })

    this.container.querySelector('.right .button')!.addEventListener('click', () => {
      if (!this.selectedIdPath.length) {
        return // Nothing to delete.
      }

      this.ui.alert('Really delete this quest?<br>If you delete this quest, all child quests will also be deleted.', ['Delete', 'Cancel'], choice => {
        if (choice === 'Delete') {
          this.deleteActiveQuest()
        }
      })
    })

    this.container.querySelector('.left .button')!.addEventListener('click', () => {
      const id = this.getNewId()
      const code = Math.random().toString(16).slice(2, 8)
      this.setList(this.getList().concat([{ id, children: [] }]))
      this.setQuests(this.getQuests().concat([{ id, name: 'Quest', description: '', code, xp: 1, completeMessage: '' }]))
      this.rebuildList()
    })
  }

  private getQuests = () => getQuests(this.ex)
  private setQuests = (quests: Quest[]) => this.ex.storage.set('quests', quests)
  private getList = () => getList(this.ex)
  private setList = (list: QuestList) => this.ex.storage.set('order', list)
  private getNewId = () => {
    const id = this.ex.storage.get('quest_id', 1)
    this.ex.storage.set('quest_id', id + 1)
    return id + 1
  }
  private getQuestById = (id: number) => this.getQuests().find(q => q.id === id)

  private deleteActiveQuest = () => {
    if (this.selectedIdPath.length) {
      const list = this.getList()

      let delList = list
      const path = [...this.selectedIdPath]
      while (path.length > 1) {
        delList = delList.find(q => q.id === path[0])!.children
        path.shift()
      }
      const index = delList.findIndex(q => q.id === path[0])
      const deleteIds = [path[0], ...getDescendentIds(delList[index])]
      this.ex.storage.set('quests', this.getQuests().filter(q => !deleteIds.includes(q.id)))
      delList.splice(index, 1)
      this.ex.storage.set('order', list)

      this.rebuildList()
      this.selectionChanged()
    }
  }

  rebuildList () {
    const quests = this.getQuests()
    const list = this.getList()

    const root = this.container.querySelector('ol')!
    if (this.drake) this.drake.destroy()
    root.innerHTML = ''

    const addHtml = (container: HTMLOListElement, root: QuestList) => {
      for (const item of root) {
        const el = createEl(container, 'li', 'quest-item')
        if (item.id === this.selectedIdPath[this.selectedIdPath.length - 1]) {
          el.classList.add('selected')
        }
        el.dataset.id = item.id.toString()
        const textEl = createEl(el, 'span', 'quest-text')
        textEl.textContent = quests.find(q => q.id === item.id)!.name

        const ol = createEl(el, 'ol', 'quest-list')
        addHtml(ol, item.children)
      }
    }

    addHtml(root, list)

    this.drake = dragula([root, ...root.querySelectorAll('.quest-list')], { revertOnSpill: true })
    this.drake.on('drop', () => this.saveOrder())

    root.addEventListener('click', event => {
      let target = event.target as HTMLElement
      while (!target.classList.contains('quest-item') && target !== root) {
        target = target.parentElement!
      }
      if (target.classList.contains('quest-item')) {
        root.querySelectorAll('.quest-item.selected').forEach(el => el.classList.remove('selected'))
        target.classList.add('selected')

        const path: number[] = []
        while (target !== root) {
          if (target.classList.contains('quest-item')) {
            path.unshift(+target.dataset.id!)
          }
          target = target.parentElement!
        }
        this.selectedIdPath = path
        this.selectionChanged()
      }
    })
  }

  selectionChanged () {
    const getInput = (s: string) => this.container.querySelector<HTMLInputElement>(s)!
    const quest = this.getQuestById(this.selectedIdPath[this.selectedIdPath.length - 1])

    getInput('[data-for=name]').value = quest ? quest.name : ''
    getInput('[data-for=description]').value = quest ? quest.description : ''
    getInput('[data-for=code]').value = quest ? quest.code : ''
    getInput('[data-for=xp]').value = quest ? quest.xp.toString() : ''
    getInput('[data-for=complete]').value = quest ? quest.completeMessage : ''
    getInput('[data-for=hidden]').checked = quest ? !!quest.hidden : false
  }

  save () {
    const getValue = (sel: string) => this.container.querySelector<HTMLInputElement>(sel)!.value

    const index = this.getQuests().findIndex(q => q.id === this.selectedIdPath[this.selectedIdPath.length - 1])
    if (index !== -1) {
      const quests = this.getQuests()
      const quest = quests[index]
      const name = getValue('[data-for=name]')
      quest.code = getValue('[data-for=code]')
      quest.description = getValue('[data-for=description]')
      quest.xp = +getValue('[data-for=xp]')
      quest.completeMessage = getValue('[data-for=complete]')
      quest.hidden = this.container.querySelector<HTMLInputElement>('[data-for=hidden]')!.checked
      if (name !== quest.name) {
        quest.name = name
        this.ex.storage.set('quests', quests)
        this.rebuildList()
      } else {
        this.ex.storage.set('quests', quests)
      }
    }
  }

  saveOrder () {
    function buildOrder (root: HTMLOListElement, order: QuestList) {
      order.push(...Array.from(root.children).map(child => {
        const item: QuestListing = { id: +(child as HTMLLIElement).dataset.id!, children: [] }
        buildOrder(child.querySelector('ol')!, item.children)
        return item
      }))
      return order
    }

    const order = buildOrder(this.container.querySelector('ol')!, [])
    this.ex.storage.set('order', order)
  }
}
