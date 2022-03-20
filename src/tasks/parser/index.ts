import { Range, TextDocument } from 'vscode'

import Sorter from '../sorter'
import { ImportType } from '../types'
import Stringifier from '../stringifier'
import { Config } from '../../utilities'
import { importRegExp } from '../../utilities/regexp'
import { getTabChars } from '../../utilities/functions'

/**
 * A wrapper around parsing import.
 */
class Parser {
  protected static tabChars = getTabChars(Config.tabType, Config.tabSize)
  protected static maxCount = Config.maxLineCount
  protected static maxLength = Config.maxLineLength
  protected static trailingComma = Config.trailingComma
  protected static hasSemicolon = Config.hasSemicolon

  /**
   * Parsing destructed imports.
   *
   * @param source Represents a destructed import.
   */
  private static parseDestructiveImports(source: string | null): string[][] | null {
    if (typeof source === 'string') {
      return source
        .slice(1, -1)
        .split(',')
        .map((f) => f.trim().split(/[\s\n\r]+as[\s\n\r]+/))
        .filter((d) => Boolean(d[0]))
    }

    return null
  }

  /**
   * Parsing imports.
   *
   * @param document Represents a text document, such as a source file.
   * @returns an array of import parses.
   */
  public static parseImports(document: TextDocument): ImportType[] {
    const source: string = document.getText()
    const imports: ImportType[] = []

    let match: any

    // eslint-disable-next-line no-cond-assign
    while ((match = importRegExp.exec(source))) {
      imports.push({
        data: match[0].replace(/(\r\n|\n|\r)/gm, ''),
        names: '',
        namespace: match[6],
        default: match[3] || match[8],
        destructed: this.parseDestructiveImports(match[4] || match[9]),
        path: match[10],
        length: match[0].replace(/(\r\n|\n|\r)/gm, '').length,
        range: new Range(
          document.positionAt(match.index),
          document.positionAt(match.index + match[0].length + 1)
        ),
      })
    }

    imports.forEach((item) => {
      if (item.destructed) {
        item.destructed = item.destructed.sort((a, b) => Sorter.compareCaseInsensitive(a[0], b[0]))
      }

      const len = this.maxLength - (this.hasSemicolon ? 16 : 15) - item.path.length
      item.names = Stringifier.names(item, this.tabChars, this.trailingComma, this.maxCount, len)
    })

    return imports
  }
}

export default Parser
