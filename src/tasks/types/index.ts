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

/**
 * Type representing a group
 */
export type Group = {
  names?: string
  path?: string
  groups?: Group[]
}

/**
 * Type representing the char for tab
 */
export enum TabType {
  space = 'space',
  tab = 'tab',
}

/**
 * Type representing the quote
 */
export enum QuotemarkType {
  single = 'single',
  double = 'double',
}

/**
 * Type representing the trailing comma
 */
export enum TrailingCommaType {
  none = 'none',
  multiLine = 'multiLine',
  always = 'always',
}
