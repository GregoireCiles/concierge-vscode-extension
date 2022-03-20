import { workspace } from 'vscode'
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
    return workspace.getConfiguration(CONFIG_NAME).showInformationMessage
  }
}

export default ConfigWrapper
