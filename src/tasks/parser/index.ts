import { Range, TextDocument } from 'vscode'

import { ImportType } from '../types'
import { importRegExp } from '../../utilities/regexp'

class Parser {
  private parseDestructiveImports(source: string | null): string[][] | null {
    if (typeof source === 'string') {
      return source
        .slice(1, -1)
        .split(',')
        .map((f) => f.trim().split(/[\s\n\r]+as[\s\n\r]+/))
        .filter((d) => Boolean(d[0]))
    }

    return null
  }

  public parseImports(document: TextDocument): ImportType[] {
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

    return imports
  }
}

export default Parser
