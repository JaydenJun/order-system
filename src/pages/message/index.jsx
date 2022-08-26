/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
// 引入ant组件
import { Input, Button, message } from 'antd'
// 引入样式
import './index.less'
// 引入请求
import { getMessageList, delMessage } from '../../api/message'

// 引入表格组件
import MessageTable from './components/messageTable'
// 引入修改通讯信息弹框
import EditMessageModal from './components/editMessageModal'
// 引入添加通讯信息弹框
import AddMessageModal from './components/addMessageModal'
// 引入添加或者修改弹框组件
import AddOrEditMessage from './components/addOrEditMessage'

// 首先布局
// 丰富逻辑


const Message = (props) => {

    const [dataSource, setDataSource] = useState([]) // 列表数据
    const [username, setUsername] = useState('') // 联系人
    const [loading, setLoading] = useState(false) // 列表请求状态
    const [isModalVisible, setIsModalVisible] = useState(false) // 修改通讯信息弹框状态
    const [celData, setCelData] = useState(null) // 修改通讯信息弹框状态
    const [isAddVisible, setIsAddVisible] = useState(false) // 添加通讯信息弹框状态
    const [isVisible, setIsVisible] = useState(false) // 添加或者修改弹框的展示状态
    const [addOrEdit, setAddOrEdit] = useState()// 判断当前是添加还是修改 true 就是添加 false 就是修改



    // 初始化执行
    useEffect(() => {
        getList()
    }, [])


    // 方法
    // 请求用户列表数据
    function getList(username) {
        setLoading(true) // 展示表格请求
        getMessageList({ username }).then(data => {
            console.log(data)
            // data 就是后台返回的数据 需要给他赋值给 datasource
            setLoading(false) // 关闭表格请求
            setDataSource(data)
        })
    }
    function search() { // 搜索
        getList(username)
    }
    function usernameChange(event) { // 用户名改变
        setUsername(event.target.value)
    }
    function addMessage() { // 添加通讯信息
        setIsAddVisible(true)
        setAddOrEdit(true) // 表示当前是添加弹框
        setIsVisible(true) // 展示 添加或者修改弹框
    }
    function modify(record) { // 修改通讯信息
        setCelData(record) // 赋值当前表单数据
        setIsModalVisible(true)
        setAddOrEdit(false) // 表示当前是修改弹框
        setIsVisible(true) // 展示 添加或者修改弹框
    }
    function handleCancel() { // 关闭通讯信息弹框
        setIsModalVisible(false)
    }
    function del(id) { // 删除通讯信息
        // 调删除接口
        delMessage(id).then(data => {
            console.log(data)
            // 提示用户 删除成功
            message.success('删除成功！')
            // 刷新列表
            getList()
        })
    }
    function addCancel() { // 关闭添加通讯信息弹框
        setIsAddVisible(false)
    }
    function cancel() { // 关闭 添加或者修改弹框
        setIsVisible(false)
    }
    return (<div className='user-list'>
        {/* 上下两行布局 */}
        {/* 搜索项 */}
        <div className='search'>
            <Input value={username} placeholder='请输入联系人' onChange={usernameChange} />
            <Button type='primary' onClick={search}>搜索</Button>
            <Button onClick={addMessage}>添加</Button>
        </div>
        <div className='table'>
            <MessageTable loading={loading} dataSource={dataSource} modify={modify} del={del} />
        </div>
        {/* 修改通讯信息 */}
        {/* <EditMessageModal isModalVisible={isModalVisible} record={celData} getList={getList} handleCancel={handleCancel} /> */}
        {/* 添加通讯信息 */}
        {/* <AddMessageModal isModalVisible={isAddVisible} handleCancel={addCancel} getList={getList} /> */}
        <AddOrEditMessage getList={getList} isModalVisible={isVisible} handleCancel={cancel} record={celData} addOrEdit={addOrEdit} />
        {/* <AddOrEditUser addOrEdit={addOrEdit} isVisible={isVisible} record={celData} username={username} cancel={cancal} getList={getList} /> */}
    </div>)
}


export default Message