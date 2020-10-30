import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/vue',
    timeout: process.env.NODE_ENV === 'development' ? 150000 : 180000
})

export {
    service as axios
}
