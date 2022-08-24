import React, { useEffect } from 'react'
import { Modal, Form, Input, Button, DatePicker } from 'antd'
// 引入接口
import { addUsers } from '../../../api/userManage'
// 引入columns
import { tailLayout } from '../utils/config.js'
const AddUser = (props) => {
    // isAddVisible 添加用户弹框状态
    // addCancel 关闭弹框方法
    const { isAddVisible, addCancel, getList } = props
    // form 申明
    const [form] = Form.useForm()
    // 初始化
    useEffect(() => {
        form.resetFields() // 表单初始
    }, [form, isAddVisible])

    // 方法
    function onFinish(values) { // 添加用户 表单成功验证方法
        console.log(values, values.regist_time)
        // 将传给后端的 时间 格式化成年月日
        const params = {
            ...values,
            regist_time: values.regist_time.format('YYYY-MM-DD')
        }
        //调用接口 
        addUsers(params).then(data => {
            console.log(data)
            // 成功之后 关闭弹框
            // setIsAddVisible(false)
            addCancel()
            // 刷新列表
            getList()
        })
    }
    return (
        <Modal title='添加用户' visible={isAddVisible} footer={null} onCancel={addCancel}>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 12 }}
                onFinish={onFinish}
            >
                {/* 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址 */}
                <Form.Item label='序号' name='id' rules={[
                    {
                        required: true,
                        message: '请输入序号!',
                    },
                ]}>
                    <Input placeholder='请输入序号' />
                </Form.Item>
                <Form.Item label='用户名' name='username' rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                ]}>
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item label='性别' name='sex' rules={[
                    {
                        required: true,
                        message: '请输入性别!',
                    },
                ]}>
                    <Input placeholder='请输入性别' />
                </Form.Item>
                <Form.Item label='年龄' name='age' rules={[
                    {
                        required: true,
                        message: '请输入年龄!',
                    },
                ]}>
                    <Input placeholder='请输入年龄' />
                </Form.Item>
                <Form.Item label='手机号' name='tel' rules={[
                    {
                        required: true,
                        message: '请输入手机号!',
                    },
                ]}>
                    <Input placeholder='请输入手机号' />
                </Form.Item>
                <Form.Item label='注册时间' name='regist_time' rules={[
                    {
                        required: true,
                        message: '请输入注册时间!',
                    },
                ]}>
                    <DatePicker format='YYYY-MM-DD' />
                </Form.Item>
                <Form.Item label='登录次数' name='ligin_count' rules={[
                    {
                        required: true,
                        message: '请输入登录次数!',
                    },
                ]}>
                    <Input placeholder='请输入登录次数' />
                </Form.Item>
                <Form.Item label='积分' name='code' rules={[
                    {
                        required: true,
                        message: '请输入积分!',
                    },
                ]}>
                    <Input placeholder='请输入积分' />
                </Form.Item>
                <Form.Item label='IP地址' name='ip_adress' rules={[
                    {
                        required: true,
                        message: '请输入IP地址!',
                    },
                ]}>
                    <Input placeholder='请输入IP地址' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button onClick={addCancel}>取消</Button>
                    <Button type='primary' htmlType='submit' style={{ marginLeft: 16 }}>确认</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddUser