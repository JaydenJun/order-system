// 引入请求方法
import { get, update, remove } from './index'
// 获取登录用户信息接口
export function getUserList(username) {
    return get('/userlist', { username })
}
// 修改用户信息接口
export function modifyUser(id, data) {
    // url, id, data
    return update('/userlist', id, data)
}
// 删除用户
export function delUser(id) {
    return remove('/userlist', id)
}