import { get, update, remove, post } from './index'

export function getMessageList(params) { // 获取列表请求
    return get('/commuinfo', params)
}
export function putMessage(params) { // 修改通讯信息
    return update('/commuinfo', params.id, params)
}
export function delMessage(id) { // 删除通讯信息
    return remove('/commuinfo', id)
}
export function addMessage(params) { // 添加通讯信息
    return post('/commuinfo', params)
}