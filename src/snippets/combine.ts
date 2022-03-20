const fs = require('fs')
const path = require('path')
const snippetFolders = ['javascript']
const jsonCommentRegex = new RegExp(/(\n\s+\/\/.*)/, 'gi')
const snippetsParentDir = path.join(__dirname, '../../src/snippets')

for (const snippetFolder of snippetFolders) {
  let snippets: string = ''
  const dir: any = path.join(snippetsParentDir, snippetFolder)

  for (const file of fs.readdirSync(dir)) {
    const filePath: any = path.join(dir, file)
    const json: any = JSON.stringify(
      JSON.parse(fs.readFileSync(filePath).toString('utf8').replace(jsonCommentRegex, '').trim())
    )

    snippets += json
    const output: any = path.join(snippetsParentDir, 'output', `${snippetFolder}.json`)
    fs.writeFileSync(output, JSON.stringify(JSON.parse(snippets)))
  }
}
