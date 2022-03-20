import { Position, Range, TextDocument, TextEdit } from 'vscode'

import Parser from './parser'
import Mapper from './mapper'
import { ImportType } from './types'
import { Config } from '../utilities'
import Stringifier from './stringifier'

/**
 * Run the instructions to sort.
 *
 * @param document Represents a text document, such as a source file.
 */
function runInstructions(document: TextDocument): TextEdit[] | undefined {
  try {
    const parsedImports: ImportType[] = Parser.parseImports(document)
    const mappedImports: ImportType[][] = Mapper.execute(parsedImports, Config.groups)
    const imports: string = Stringifier.imports(mappedImports)

    if (!parsedImports.length) {
      return undefined
    } else {
      const start: Position = new Position(0, 0)
      const end: Position = parsedImports[parsedImports.length - 1].range.end
      const source: string = document.getText(new Range(start, end))

      if (source === imports) {
        return undefined
      }
    }

    const edits: TextEdit[] = parsedImports
      .reverse()
      .map((parsedImport) => TextEdit.delete(parsedImport.range))

    edits.push(TextEdit.insert(new Position(0, 0), imports))

    return edits
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default runInstructions
