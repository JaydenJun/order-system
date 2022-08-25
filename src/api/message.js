import { get, update } from './index'

export function getMessageList(params) { // 获取列表请求
    return get('/commuinfo', params)
}
export function putMessage(params) { // 修改通讯信息
    return update('/commuinfo', params.id, params)
}