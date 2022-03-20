import { workspace } from 'vscode'
import { Group, QuotemarkType, TabType, TrailingCommaType } from '../tasks/types'
import { CONFIG_NAME } from './constants'

/**
 * A configuration value set by a user (default provided by extension).
 *
 * See extension root `package.json` for for information.
 */
type Config = { [key: string]: any }

/**
 * A wrapper around vscode configuration for this extension
 */
class ConfigWrapper {
  /**
   * Configuration for show the information message.
   */
  public static get showInformationMessage(): Config {
    return workspace.getConfiguration(CONFIG_NAME).format.showInformationMessage
  }

  /**
   * Configuration for the character of tab.
   */
  public static get tabType(): TabType {
    return workspace.getConfiguration(CONFIG_NAME).format.tabType
  }

  /**
   * Configuration for tab size.
   */
  public static get tabSize(): number {
    return workspace.getConfiguration(CONFIG_NAME).format.tabSize
  }

  /**
   * Configuration for the type of quote.
   */
  public static get quotemark(): QuotemarkType {
    return workspace.getConfiguration(CONFIG_NAME).format.quotemark
  }

  /**
   * Configuration for trailing comma.
   */
  public static get trailingComma(): TrailingCommaType {
    return workspace.getConfiguration(CONFIG_NAME).format.trailingComma
  }

  /**
   * Configuration for semicolon.
   */
  public static get hasSemicolon(): boolean {
    return workspace.getConfiguration(CONFIG_NAME).format.semicolon
  }

  /**
   * Configuration for number of named import per line.
   */
  public static get maxLineCount(): number {
    return workspace.getConfiguration(CONFIG_NAME).format.maxLineCount
  }

  /**
   * Configuration for charater count per line.
   */
  public static get maxLineLength(): number {
    return workspace.getConfiguration(CONFIG_NAME).format.maxLineLength
  }

  /**
   * Configuration for number of empty lines after group.
   */
  public static get emptyLines(): number {
    return workspace.getConfiguration(CONFIG_NAME).format.emptyLines
  }

  /**
   * Configuration for number of empty lines after last group.
   */
  public static get lastEmptyLines(): number {
    return workspace.getConfiguration(CONFIG_NAME).format.lastEmptyLines
  }

  /**
   * Configuration for rules of group.
   */
  public static get groups(): Group[] {
    return workspace.getConfiguration(CONFIG_NAME).format.groups
  }
}

export default ConfigWrapper
