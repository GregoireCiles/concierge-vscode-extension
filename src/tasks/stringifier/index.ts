import { Config } from '../../utilities'
import { ImportType, QuotemarkType, TrailingCommaType } from '../types'

/**
 * A wrapper around stringify imports.
 */
class Stringifier {
  /**
   * Stringify destructed import.
   */
  public static destructed(
    destructed: string[][] | null,
    tab: string,
    multiLine: boolean,
    comma: boolean
  ): string {
    if (!destructed) {
      return ''
    }

    if (!destructed.length) {
      return '{}'
    }

    const char: string = multiLine ? tab : ''
    const length: number = destructed.length - 1

    const body: string[] = destructed
      .map((item: string[]) => item.join(' as '))
      .map((item: string, idx: number) => char + item + (idx < length || comma ? ',' : ''))

    return ['{', ...body, '}'].join(multiLine ? '\n' : ' ')
  }

  /**
   * Stringify names import.
   */
  public static names(
    element: ImportType,
    tab: string,
    trailingComma: TrailingCommaType,
    maxCount: number,
    maxLength: number
  ): string {
    if (element.namespace) {
      return '* as ' + element.namespace
    }

    const multiLine = !!element.destructed && element.destructed.length > maxCount

    let comma =
      trailingComma === TrailingCommaType.always ||
      (trailingComma === TrailingCommaType.multiLine && multiLine)

    let names = [element.default, this.destructed(element.destructed, tab, multiLine, comma)]
      .filter(Boolean)
      .join(', ')

    if (!multiLine && names.length > maxLength) {
      comma = trailingComma !== TrailingCommaType.none
      names = [element.default, this.destructed(element.destructed, tab, true, comma)]
        .filter(Boolean)
        .join(', ')
    }

    return names
  }

  /**
   * Stringify list of imports.
   */
  public static imports(imports: ImportType[][]): string {
    const emptyLines = Config.emptyLines
    const lastEmptyLines = Config.lastEmptyLines
    // eslint-disable-next-line @typescript-eslint/quotes
    const quote = Config.quotemark === QuotemarkType.single ? "'" : '"'
    const semi = Config.hasSemicolon ? ';' : ''

    return (
      imports
        .filter((list) => !!list.length)
        .map((list) => {
          return (
            list
              .map((item) => {
                return item.names
                  ? `import ${item.names} from ${quote}${item.path}${quote}${semi}`
                  : `import ${quote}${item.path}${quote}${semi}`
              })
              .join('\r\n') + '\r\n'
          )
        })
        .join('\r\n'.repeat(emptyLines)) + '\r\n'.repeat(lastEmptyLines)
    )
  }
}

export default Stringifier
