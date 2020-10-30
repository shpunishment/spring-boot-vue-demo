import { axios } from '@/utils/request' //引入封装好的 axios 请求

export function getByUsername (parameter) {
    return axios.get('/user/getByUsername', { params: parameter })
}
