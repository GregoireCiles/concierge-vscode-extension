import * as vscode from 'vscode'
import Tasks from './tasks'
import { Config } from './utilities'

import Validation from './utilities/validation'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('concierge.format.import', () => {
      const window: typeof vscode.window = vscode.window
      const textEditor: vscode.TextEditor | undefined = window.activeTextEditor

      if (textEditor === undefined) {
        return
      }

      if (Validation.supportedLanguage(textEditor.document.languageId)) {
        Tasks(textEditor.document)

        if (Config.showInformationMessage) {
          window.showInformationMessage('Wow, you 🏄 so well!')
        }
      }
    })
  )
}

export function deactivate() {}
