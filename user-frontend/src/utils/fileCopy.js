
const fileUtil = require('./fileUtil')

// 后端项目的文件夹名称，这里是 user-api
const backendProjectName = 'user-api'
// 目标文件夹
const staticDirectory = '../' + backendProjectName + '/src/main/resources/static/'
// 删除
fileUtil.deleteFolder(staticDirectory)
// 拷贝
fileUtil.copyFolder('./dist', staticDirectory)
console.log('文件拷贝成功!')
