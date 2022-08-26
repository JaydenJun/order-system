import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Button, message, DatePicker } from 'antd'
import moment from 'moment'
import { tailLayout } from '../../../utils'

// 引入请求
import { modifyUser } from '../../../api/userManage'
const EditUser = (props) => {
    // getList 刷新列表方法
    // record 当前表单数据
    // isModalVisible 弹框展示状态
    // handleCancel 关闭弹框方法
    const { getList, record, isModalVisible, handleCancel } = props

    // 获取form方法
    const [form] = Form.useForm();

    //初始化
    useEffect(() => {
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
    }, [record])

    // 方法
    function onFinish(values) { // 校验成功事件
        const params = {
            ...values,
            regist_time: values.regist_time.format('YYYY-MM-DD')
        }
        modifyUser(values.id, params).then(data => {
            console.log(data, 'modifyuser')
            message.success('修改成功！')
            // 修改成功 则关闭弹框 
            // setIsModalVisible(false);
            handleCancel()
            // 并且 重新请求列表
            getList()
        }).catch(err => {
            console.log(err)
            message.error('修改失败！')
        })
    };
    function onFinishFailed(errorInfo) { // 校验失败事件
        console.log('Failed:', errorInfo);
    };
    return (
        < Modal title="修改用户" visible={isModalVisible} footer={null} onCancel={handleCancel} >
            <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 12 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <Button onClick={handleCancel}>取消</Button>
                    <Button type='primary' htmlType='submit' style={{ marginLeft: 16 }}>确认</Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default EditUser