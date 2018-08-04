export interface Quest {
  /**
   * Unique, primary key
   */
  id: number
  /**
   * Users are encouraged to keep this unique, but there could be duplicates.
   */
  code: string
  /**
   * Displayed in the tree and quest listings.
   */
  name: string
  /**
   * Displayed when the user requests info about a quest.
   */
  description: string
  /**
   * How much XP the user gets when completing this quest.
   */
  xp: number
  /**
   * Message sent when a user completes the quest
   */
  completeMessage: string
}

export type QuestListing = { id: number, children: QuestListing[] }

/**
 * Describes how the quests are ordered.
 */
export type QuestList = QuestListing[]
