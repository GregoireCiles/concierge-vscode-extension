# Change Log

All notable changes to the "concierge" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [1.1.1] - 2022-03-22
- Change output directory for snippets

## [1.1.0] - 2022-03-22
- Combine snippets groups into single json file
- Adding snippets
  - javascript snippets
    - javascript: console, prefix: `console`
    - javascript: console.log, prefix: `log`
    - javascript: console.error, prefix: `log-error` or `error`
    - javascript: console.warn, prefix: `log-warn` or `warn`
    - javascript: console.dir, prefix: `log-dir` or `dir`
  - jest snippets
    - jest: describe, prefix: `describe` or `desc`
    - jest: it, prefix: `jest-it` or `it`
    - jest: describe & it, prefix: `jest-describe-it` or `desc-it`
    - jest: clean mocks, prefix: `jest-clean-mocks` or `clean-mocks`
    - jest: mock function, prefix: `jest-mock-function` or `mock-function` or `mockfn`
    - jest: assert fail, prefix: `jest-assert-fail` or `assert-fail`

## [1.0.0] - 2022-03-20
- First release

[Unreleased]: https://github.com/GregoireCiles/concierge-vscode-extension/compare/v1.0.0...HEAD
[1.1.1]: https://github.com/GregoireCiles/concierge-vscode-extension/releases/tag/v1.1.1
[1.1.0]: https://github.com/GregoireCiles/concierge-vscode-extension/releases/tag/v1.1.0
[1.0.0]: https://github.com/GregoireCiles/concierge-vscode-extension/releases/tag/v1.0.0
