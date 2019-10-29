import html from './info-tab.html'
import { MessageBotExtension } from '@bhmb/bot';

export const LEADERBOARD_SAVE_KEY = "leaderboard"

export const getLeaderboardLimit = (ex: MessageBotExtension) => ex.storage.get(LEADERBOARD_SAVE_KEY, 10)

export class InfoTab {
  constructor (ex: MessageBotExtension, container: HTMLElement) {
    container.innerHTML = html

    const levelTopElement = container.querySelector('input[data-for="leveltop"]')! as HTMLInputElement
    
    levelTopElement.addEventListener('change', function () {
      const leaderboardCount = Math.max(Math.min(parseInt(this.value), 20), 1)
      ex.storage.set(LEADERBOARD_SAVE_KEY, leaderboardCount)
    });

    levelTopElement.value = getLeaderboardLimit(ex).toString()
  }
}
