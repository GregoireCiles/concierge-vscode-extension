import { TabType } from '../tasks/types'

/**
 * @param tabType Represents the character of tab
 * @param tabSize The size of the tab
 */
export function getTabChars(tabType: TabType, tabSize: number): string {
  if (tabType === TabType.space) {
    return Array.from({ length: tabSize + 1 }).join(' ')
  } else {
    return '\t'
  }
}
