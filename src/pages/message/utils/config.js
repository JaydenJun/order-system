import { Divider, Popconfirm } from 'antd'
// 序号	联系人	联系电话	状态	省市区	街道地址	邮编	QQ号	邮箱	操作
export const columns = (modify, del) => [
    /**
        adress: "亲贤大街"
        email: "2132313@qq.com"
        id: "005"
        local: "太原市小店区"
        mailcode: "454455"
        qqcode: "2132313"
        states: "已审核"
        tel: "13209788638"
        username: "春野樱"
     * 
    */
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        align: 'center'
    },
    {
        title: '联系人',
        dataIndex: 'username',
        key: 'username',
        align: 'center'
    },
    {
        title: '联系电话',
        dataIndex: 'tel',
        key: 'tel',
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'states',
        key: 'states',
        align: 'center'
    },
    {
        title: '省市区',
        dataIndex: 'local',
        key: 'local',
        align: 'center'
    },
    {
        title: '街道地址',
        dataIndex: 'adress',
        key: 'adress',
        align: 'center'
    },
    {
        title: '邮编',
        dataIndex: 'mailcode',
        key: 'mailcode',
        align: 'center'
    },
    {
        title: 'QQ号',
        dataIndex: 'qqcode',
        key: 'qqcode',
        align: 'center'
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        align: 'center'
    },
    {
        title: '操作',
        key: 'ctrl',
        align: 'center',
        render: (_, record) => (
            <>
                <a onClick={() => modify(record)}>修改</a>
                <Divider type="vertical" />
                <Popconfirm
                    title="确认删除吗?"
                    onConfirm={() => del(record.id)}
                    okText="确认"
                    cancelText="取消"
                >
                    <a>删除</a>
                </Popconfirm>
            </>
        )
    },
];