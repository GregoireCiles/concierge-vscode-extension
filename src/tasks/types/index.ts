import { Range } from 'vscode'

/**
 * Type representing an import
 */
export type ImportType = {
  data: string
  names: string
  namespace: string | null
  default: string | null
  destructed: string[][] | null
  path: string
  length: number
  range: Range
}
