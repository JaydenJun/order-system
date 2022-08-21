import React, { useEffect, useState } from 'react'
// 引入ant组件
import { Input, Button, Table } from 'antd'
// 引入样式
import './index.less'
// 引入请求
import { getUserList } from '../../api/userManage'

// 首先布局
// 丰富逻辑
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
const columns = [
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
        align: 'center'
    },
];

const UserList = (props) => {

    const [dataSource, setDataSource] = useState([]) // 声明dataSource
    const [username, setUsername] = useState('')

    // 初始化执行
    useEffect(() => {
        getList()
    }, [])

    // 方法
    // 请求用户列表数据
    function getList(username) {
        getUserList(username).then(data => {
            console.log(data)
            // data 就是后台返回的数据 需要给他赋值给 datasource
            setDataSource(data)
        })
    }
    function search() { // 搜索
        getList(username)
    }
    function usernameChange(event) { // 用户名改变
        setUsername(event.target.value)
    }
    return (<div className='user-list'>
        {/* 上下两行布局 */}
        {/* 搜索项 */}
        <div className='search'>
            <Input value={username} placeholder='请输入用户名' onChange={usernameChange} />
            <Button type='primary' onClick={search}>搜索</Button>
            <Button>添加</Button>
        </div>
        <div className='table'>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    </div>)
}


export default UserList