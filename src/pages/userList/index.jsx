/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
// 引入ant组件
import { Input, Button,  message } from 'antd'
// 引入样式
import './index.less'
// 引入请求
import { getUserList, delUser } from '../../api/userManage'

// 引入修改用户弹框组件
import EditUser from './components/editUser'
// 引入添加用户组件
import AddUser from './components/addUser'
// 引入表格组件
import UserTable from './components/userTable'
// 引入修改或者添加用户弹框组件
import AddOrEditUser from './components/addOrEditUser'

// 首先布局
// 丰富逻辑


const UserList = (props) => {

    const [dataSource, setDataSource] = useState([]) // 声明dataSource
    const [username, setUsername] = useState('') // 用户名
    const [isModalVisible, setIsModalVisible] = useState(false) // 修改弹框展示状态
    const [isAddVisible, setIsAddVisible] = useState(false) // 添加用户弹框展示状态
    const [celData, setCellData] = useState(null) // 修改弹框展示状态
    const [loading, setLoading] = useState(false); //列表请求状态
    const [addOrEdit, setAddOrEdit] = useState(false); // 添加或者修改 弹框的标识符 true 为add  false为 修改
    const [isVisible, setIsVisible] = useState(false); // 添加或者修改用户 弹框的展示状态



    // 初始化执行
    useEffect(() => {
        getList()
    }, [])


    // 方法
    // 请求用户列表数据
    function getList(username) {
        setLoading(true) // 展示表格请求
        getUserList(username).then(data => {
            console.log(data)
            // data 就是后台返回的数据 需要给他赋值给 datasource
            setDataSource(data)
            setLoading(false) // 关闭表格请求
        })
    }
    function search() { // 搜索
        getList(username)
    }
    function usernameChange(event) { // 用户名改变
        setUsername(event.target.value)
    }
    function modify(record) { // 修改弹框展示事件
        setCellData(record)
        // 将状态置为 false 则为修改
        setAddOrEdit(false)
        setIsVisible(true)
    }
    function del(id) { // 删除用户
        delUser(id).then(data => {
            console.log(data, 'delUser')
            // 提示用户
            message.success('删除成功！')
            // 更新列表
            getList()
        })
    }
    function handleCancel() { // 取消按钮
        setIsModalVisible(false)
    }
    function addCancel() { // 添加用户取消方法
        setIsAddVisible(false)
    }
    function addUser() { // 添加用户 弹框展示
        // 将状态置为 true 则为添加
        setAddOrEdit(true)
        setIsVisible(true)
    }
    function cancal() { // 添加或者修改用户弹框的关闭方法
        setIsVisible(false)
    }
    return (<div className='user-list'>
        {/* 上下两行布局 */}
        {/* 搜索项 */}
        <div className='search'>
            <Input value={username} placeholder='请输入用户名' onChange={usernameChange} />
            <Button type='primary' onClick={search}>搜索</Button>
            <Button onClick={addUser}>添加</Button>
        </div>
        <div className='table'>
            <UserTable loading={loading} dataSource={dataSource} modify={modify} del={del} />
        </div>
        {/* 修改用户 */}
        {/* <EditUser isModalVisible={isModalVisible} record={celData} getList={getList} handleCancel={handleCancel} /> */}
        {/* 添加用户 */}
        {/* <AddUser isAddVisible={isAddVisible} addCancel={addCancel} getList={getList} /> */}
        <AddOrEditUser addOrEdit={addOrEdit} isVisible={isVisible} record={celData} username={username} cancel={cancal} getList={getList} />
    </div>)
}


export default UserList