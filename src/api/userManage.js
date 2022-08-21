// 引入请求方法
import { get } from './index'
// 获取登录用户信息接口
export function getUserList(username) {
    return get('/userlist', { username })
}