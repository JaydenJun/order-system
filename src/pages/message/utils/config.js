import { Divider, Popconfirm, Tag } from 'antd'
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
        width: 70,
        align: 'center'
    },
    {
        title: '联系人',
        dataIndex: 'username',
        key: 'username',
        width: 100,
        align: 'center'
    },
    {
        title: '联系电话',
        dataIndex: 'tel',
        key: 'tel',
        width: 120,
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'states',
        key: 'states',
        align: 'center',
        render: (cell, record) => {
            // cell 当前单元格的数据 前提 我们定义了 dataIndex
            // record 当前行的数据
            //  已审核 green 待审核 orange 未审核 red
            const stateMap = {
                已审核: {
                    color: 'green',
                    name: '已审核'
                },
                待审核: {
                    color: 'orange',
                    name: '待审核'
                },
                未审核: {
                    color: 'red',
                    name: '未审核'
                }
            }
            console.log(stateMap[cell])
            return (
                // <>
                //     {cell === '已审核' ? <Tag color='green'>已审核</Tag> :
                //         (cell === '待审核' ? <Tag color='orange'>待审核</Tag> :
                //             <Tag color='red'>未审核</Tag>)}
                // </>
                <Tag color={stateMap[cell].color}>{cell}</Tag>
            )


        }
    },
    {
        title: '省市区',
        dataIndex: 'local',
        key: 'local',
        width: 120,
        ellipsis: true,
        align: 'center'
    },
    {
        title: '街道地址',
        dataIndex: 'adress',
        key: 'adress',
        width: 120,
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
        width: 120,
        align: 'center',
        render: (_, record) => (
            <>
                <a onClick={() => modify(record)}>修改</a>
                <Divider type="vertical" />
                {/* 弹出二次确认弹框 */}
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