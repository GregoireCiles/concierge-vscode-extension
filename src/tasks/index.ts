import { TextDocument } from 'vscode'

import Parser from './parser'

function tasks(document: TextDocument) {
  const parser = new Parser()
  parser.parseImports(document)
}

export default tasks
