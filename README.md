# concierge-vscode

VSCode extension to help grouping and formatting the import as a wave.

## Features

- [x] Sort import
- [x] Group by Regexp, support child groups
- [x] Configuration with tab style, quotemark, trailing comma, semicolon...
- [x] Snippets to save your life with console.log and jest

## Extension Settings

- `concierge.format.showInformationMessage`: Display a message when formatting is finished with success. `true`(default) or `false`.
- `concierge.format.tabType`: The type of tab to use. `space`(default) or `tab`.
- `concierge.format.tabSize`: The size of tab to use. `2`(default).
- `concierge.format.quotemark`: The type of quotation mark to use. `single`(default) or `double`.
- `concierge.format.trailingComma`: Add trailing comma or not. `multiLine`(default) or `none` or `always`.
- `concierge.format.semicolon`: If set to `true`, the trailing semicolon will be omitted. Default: `true`
- `concierge.format.maxLineCount`: Define number of named import per line. Default: `10`
- `concierge.format.maxLineLength`: Define charater count per line. Default: `120`
- `concierge.format.emptyLines`: Define number of empty lines after group. Default: `1`
- `concierge.format.lastEmptyLines`: Define number of empty lines after last group. Default: `1`
- `concierge.format.groups`: An array describing the rules of group. 
  ```json
  [
    {
      "path": "^[a-zA-Z0-9]+$"
    },
    {
      "path": "^[^.@]|@[^/]",
      "groups": [
        {
          "names": "^\\*",
          "path": "^react|vue|@"
        },
        {
          "names": "^\\*"
        },
        {
          "names": "^[^,{]+$"
        },
        {
          "names": "^[^{]"
        }
      ]
    },
  ]
  ```

## Extension Snippets

### JavaScript, Typescript, React

#### Console.log

- javascript: console, prefix: `console`
- javascript: console.log, prefix: `log`
- javascript: console.error, prefix: `log-error` or `error`
- javascript: console.warn, prefix: `log-warn` or `warn`
- javascript: console.dir, prefix: `log-dir` or `dir`

#### Jest

- jest: describe, prefix: `describe` or `desc`
- jest: it, prefix: `jest-it` or `it`
- jest: describe & it, prefix: `jest-describe-it` or `desc-it`
- jest: clean mocks, prefix: `jest-clean-mocks` or `clean-mocks`
- jest: mock function, prefix: `jest-mock-function` or `mock-function` or `mockfn`
- jest: assert fail, prefix: `jest-assert-fail` or `assert-fail`

## Known Issues

- This extension does not currently sort comments within the import block along with the import statements

## Release Notes

> ### 1.0.0
> - First release
