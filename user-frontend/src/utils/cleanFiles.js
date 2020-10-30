
const fs = require('fs')
const p = require('path')

const nodeModulesPath = p.join(__dirname, '../../node_modules')
const lockJsonPath = p.join(__dirname, '../../package-lock.json')

if (fs.existsSync(nodeModulesPath)) {
  const fileUtil = require('./fileUtil')

  fileUtil.deleteFolderByRimraf(nodeModulesPath)
  console.log('删除 node_modules 成功!')

  fileUtil.deleteFile(lockJsonPath)
  console.log('删除 package-lock.json 成功!')
}
