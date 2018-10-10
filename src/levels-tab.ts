import html from './levels-tab.html'
import { UIExtensionExports } from '@bhmb/ui'
import { MessageBotExtension } from '@bhmb/bot'
import dragula from 'dragula'

export interface Level {
  xp: number
  title: string
  onLevelUp: string
}

const SAVE_KEY = 'levels'

export function levelsTab (ex: MessageBotExtension, ui: UIExtensionExports, container: HTMLElement) {
  container.innerHTML = html
  const template = container.querySelector('template')!
  const list: HTMLElement = container.querySelector('.list') as HTMLElement

  dragula([list])

  function rebuildLevelList () {
    const levels: Level[] = Array.from(list.children)
      .map(el => ({
        xp: +el.querySelector<HTMLInputElement>('[data-target=xp]')!.value,
        title: el.querySelector<HTMLInputElement>('[data-target=title]')!.value,
        onLevelUp: el.querySelector<HTMLInputElement>('[data-target=message]')!.value
      }))
    ex.storage.set(SAVE_KEY, levels)
  }

  ex.storage.get<Level[]>(SAVE_KEY, []).forEach(addLevelToPage)

  function addLevelToPage ({ xp, title, onLevelUp }: Level) {
    ui.buildTemplate(template, list, [
      { selector: '[data-target=title]', value: title },
      { selector: '[data-target=xp]', value: xp },
      { selector: '[data-target=message]', value: onLevelUp }
    ])
  }

  container.querySelector('.is-add-button')!.addEventListener('click', () => {
    addLevelToPage({
      xp: 100,
      title: 'Super cool title',
      onLevelUp: ' {{Name}} leveled up!'
    })
    rebuildLevelList()
  })

  container.addEventListener('click', ({ target }) => {
    if (!(target instanceof HTMLButtonElement) || target.dataset.do !== 'delete') {
      return
    }

    const messageEl = target.parentElement!.parentElement!.parentElement!
    messageEl.remove()
    rebuildLevelList()
  })

  container.addEventListener('change', rebuildLevelList)
}
