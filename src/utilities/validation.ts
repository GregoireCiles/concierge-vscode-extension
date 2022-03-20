/**
 * Ensure that the language identifier associated with this document is supported.
 *
 * @param languageId The identifier of the language associated with this document.
 */
export function isSupportedLanguages(languageId: string): boolean {
  return (
    languageId === 'typescript' ||
    languageId === 'typescriptreact' ||
    languageId === 'javascript' ||
    languageId === 'javascriptreact'
  )
}

class Validation {
  public static supportedLanguage(languageId: string): boolean {
    return (
      languageId === 'typescript' ||
      languageId === 'typescriptreact' ||
      languageId === 'javascript' ||
      languageId === 'javascriptreact'
    )
  }
}

export default Validation
