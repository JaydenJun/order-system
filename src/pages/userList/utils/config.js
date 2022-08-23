/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider } from 'antd'
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
export const columns = (modify, del) => [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        align: 'center'
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        align: 'center'
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        align: 'center'
    },
    {
        title: '手机号',
        dataIndex: 'tel',
        key: 'tel',
        align: 'center'
    },
    {
        title: '注册时间',
        dataIndex: 'regist_time',
        key: 'regist_time',
        align: 'center'
    },
    {
        title: '登录次数',
        dataIndex: 'ligin_count',
        key: 'ligin_count',
        align: 'center'
    },
    {
        title: '积分',
        dataIndex: 'code',
        key: 'code',
        align: 'center'
    },
    {
        title: 'IP地址',
        dataIndex: 'ip_adress',
        key: 'ip_adress',
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
                <a onClick={() => del(record.id)}>删除</a>
            </>
        )
    },
];