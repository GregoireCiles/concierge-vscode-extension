import Sorter from '../sorter'
import { Group, ImportType } from '../types'

/**
 * A wrapper around mapping imports.
 */
class Mapper {
  /**
   * Check if an import is in a group.
   *
   * @param element Represents an import.
   * @param names RegEx at name level for imports.
   * @param path RegEx at path level for imports.
   */
  private static isInGroup(element: ImportType, names?: RegExp, path?: RegExp): boolean {
    if (names && !names.test(element.names)) {
      return false
    }

    if (path && !path.test(element.path)) {
      return false
    }

    return true
  }

  /**
   * Map imports and sort them by import group.
   *
   * @param list Represents a list of imports.
   * @param rules Rules for differentiating import groups.
   */
  public static execute(list: ImportType[], rules: Group[]): ImportType[][] {
    const rest: ImportType[] = [...list]

    const groups = rules.map((rule: Group) => {
      const names: RegExp | undefined = rule.names ? new RegExp(rule.names) : undefined
      const path: RegExp | undefined = rule.path ? new RegExp(rule.path) : undefined

      let group: ImportType[] = []

      for (let idx = 0; idx < rest.length; idx++) {
        if (this.isInGroup(rest[idx], names, path)) {
          group.push(rest[idx])
          rest.splice(idx--, 1)
        }
      }

      return Sorter.sort(group)
    })

    if (rest.length) {
      groups.push(rest)
    }

    return groups
  }
}

export default Mapper
