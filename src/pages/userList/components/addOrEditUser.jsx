import React, { useEffect } from 'react'
import { Modal, Form, Input, Button, DatePicker, message } from 'antd'
// 引入接口
import { addUsers, modifyUser } from '../../../api/userManage'
// 引入columns
import { tailLayout } from '../../../utils'
import moment from 'moment'

const AddOrEditUser = (props) => {
    // addCancel 关闭弹框方法    
    // getList 刷新列表方法
    // record 当前表单数据
    // isModalVisible 弹框展示状态
    // addOrEdit 添加或者修改 弹框的标识符 true 为add  false为 修改
    // username 搜索项
    const { isVisible, cancel, getList, addOrEdit, record,username } = props
    // form 申明
    const [form] = Form.useForm()
    // 初始化
    useEffect(() => {
        if (addOrEdit) {
            form.resetFields() // 表单初始,
        } else {
            // 现在就是修改用户的状态
            // 给表单赋值
            // 将数据渲染到form表单上
            // 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
            if (record) {
                const { id, username, sex, age, tel, regist_time, ligin_count, code, ip_adress } = record;
                form.setFieldsValue({
                    id,
                    username,
                    sex,
                    age,
                    tel,
                    regist_time: moment(regist_time),
                    ligin_count,
                    code,
                    ip_adress
                });
            }
        }
    }, [addOrEdit, form, isVisible, record])

    // 方法
    function onFinish(values) { // 添加用户 表单成功验证方法
        // 需要判断当前是添加还是修改
        const params = {
            ...values,
            regist_time: values.regist_time.format('YYYY-MM-DD')
        }
        if (addOrEdit) {
            // 将传给后端的 时间 格式化成年月日
            //调用接口 
            addUsers(params).then(data => {
                console.log(data)
                // 提示用户
                message.success('添成功！')
                // 成功之后 关闭弹框
                // setIsAddVisible(false)
                cancel()
                // 刷新列表
                getList()
            })
        } else {
            modifyUser(values.id, params).then(data => {
                console.log(data, 'modifyuser')
                message.success('修改成功！')
                // 修改成功 则关闭弹框 
                // setIsModalVisible(false);
                cancel()
                // 并且 重新请求列表
                // 如果有搜索项 则 只搜索修改后的用户名
                if(username){
                    getList(values.username)
                }else{
                    getList()
                }
            }).catch(err => {
                console.log(err)
                message.error('修改失败！')
            })
        }
    }
    return (
        <Modal title={addOrEdit ? '添加用户' : '修改用户'} visible={isVisible} footer={null} onCancel={cancel}>
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
                    <Button onClick={cancel}>取消</Button>
                    <Button type='primary' htmlType='submit' style={{ marginLeft: 16 }}>确认</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddOrEditUser