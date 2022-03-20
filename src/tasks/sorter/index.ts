import { ImportType } from '../types'

/**
 * A wrapper around sorting imports.
 */
class Sorter {
  /**
   * Sorts according to whether the current string is before, after or the same as
   * the string passed in parameter, according to the lexicographical order.
   */
  public static compareCaseInsensitive(previousValue: string, currentValue: string): number {
    return previousValue
      .toLowerCase()
      .localeCompare(currentValue.toLowerCase(), 'en', { caseFirst: 'lower' })
  }

  /**
   * Sorts according to whether the current string is before, after or the same as
   * the string passed in parameter, according to their length.
   */
  public static sort(imports: ImportType[]): ImportType[] {
    return imports.sort((a, b) => a.length - b.length)
  }
}

export default Sorter
