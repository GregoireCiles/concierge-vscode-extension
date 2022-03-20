import * as vscode from 'vscode'

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
        window.showInformationMessage('Wow, you 🏄 so well!')
      }
    })
  )
}

export function deactivate() {}
