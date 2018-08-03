import { MessageBot } from '@bhmb/bot'
import { UIExtensionExports } from '@bhmb/ui'

// Remove for production
import css from '../style.css'
import { QuestsTab } from './quests-tab'
import { InfoTab } from './info-tab'
document.head.appendChild(document.createElement('style')).textContent = css

const TAB_GROUP = 'quests'

MessageBot.registerExtension('bibliofile/quests', ex => {
  console.log('Launching quests...')

  const ui = ex.bot.getExports('ui') as UIExtensionExports | undefined
  if (!ui) return

  ui.addTabGroup('Quests', TAB_GROUP)

  const infoTab = new InfoTab(ui.addTab('Info', TAB_GROUP))
  const questsTab = new QuestsTab(ex, ui, ui.addTab('Quests', TAB_GROUP))

  ex.remove = () => {
    ui.removeTabGroup(TAB_GROUP)
  }
})
