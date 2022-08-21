// 声明菜单数据
export const menuList = [
    {
        key: 'userMange',
        title: '用户管理',
        children: [
            {
                key: 'userList',
                title: '用户列表',
                path: '/layout/userList'
            },
            {
                key: 'message',
                title: '通讯信息',
                path: '/layout/message'
            },
            {
                key: 'analysis',
                title: '统计分析',
                path: '/layout/analysis'
            },
        ]
    },
    {
        key: 'businessMange',
        title: '商户管理',
        children: [
            { key: 'businessList', title: '商户列表' },
            { key: 'account', title: '登录账户' },
            { key: 'businessAnalysis', title: '商户分析' },
        ]
    },
    {
        key: 'orderMange',
        title: '订单管理',
        children: [
            { key: 'orderList', title: '订单列表' },
            { key: 'orderAnalysis', title: '订单分析' },
        ]
    },
    { key: 'payments', title: '收支管理' },
    { key: 'platform', title: '平台管理' },
    {
        key: 'safe', title: '安全管理', children: [
            {
                key: '1', title: 'test1',
                children: [
                    { key: '1-2', title: 'test1-2' },
                    { key: '1-3', title: 'test1-3' },
                ]
            },
            { key: '2', title: 'test2' },
            { key: '3', title: 'test3' },
        ]
    },

]
export const arr = []
export const usestate = () => { }
export const component = () => { }
const react = {
    usestate,
    component
}
export default react