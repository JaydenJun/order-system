import React, { useEffect } from 'react'
import { Modal, Form, Input, Button, message } from 'antd'
import { tailLayout } from '../../../utils'

// 引入请求
import { modifyUser } from '../../../api/userManage'
import { putMessage } from '../../../api/message'
const EditMessageModal = (props) => {
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
        if (record) {
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
            const { id, username, adress, email, local, qqcode, states, mailcode, tel } = record;
            form.setFieldsValue({
                id, username, adress, email, local, qqcode, states, mailcode, tel
            });
        }
    }, [record])

    // 方法
    function onFinish(values) { // 校验成功事件
        console.log(values, '修改通讯信息')
        putMessage(values).then(data => {
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
                <Form.Item label='联系人' name='username' rules={[
                    {
                        required: true,
                        message: '请输入联系人!',
                    },
                ]}>
                    <Input placeholder='请输入联系人' />
                </Form.Item>
                <Form.Item label='联系电话' name='tel' rules={[
                    {
                        required: true,
                        message: '请输入联系电话!',
                    },
                ]}>
                    <Input placeholder='请输入联系电话' />
                </Form.Item>
                <Form.Item label='街道地址' name='adress' rules={[
                    {
                        required: true,
                        message: '请输入街道地址!',
                    },
                ]}>
                    <Input placeholder='请输入街道地址' />
                </Form.Item>
                <Form.Item label='邮编' name='email' rules={[
                    {
                        required: true,
                        message: '请输入邮编!',
                    },
                ]}>
                    <Input placeholder='请输入邮编' />
                </Form.Item>
                <Form.Item label='省市区' name='local' rules={[
                    {
                        required: true,
                        message: '请输入省市区!',
                    },
                ]}>
                    <Input placeholder='请输入省市区' />
                </Form.Item>
                <Form.Item label='QQ' name='qqcode' rules={[
                    {
                        required: true,
                        message: '请输入QQ号码!',
                    },
                ]}>
                    <Input placeholder='请输入QQ号码' />
                </Form.Item>
                <Form.Item label='状态' name='states' rules={[
                    {
                        required: true,
                        message: '请输入状态!',
                    },
                ]}>
                    <Input placeholder='请输入状态' />
                </Form.Item>
                <Form.Item label='邮箱' name='mailcode' rules={[
                    {
                        required: true,
                        message: '请输入邮箱!',
                    },
                ]}>
                    <Input placeholder='请输入邮箱' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button onClick={handleCancel}>取消</Button>
                    <Button type='primary' htmlType='submit' style={{ marginLeft: 16 }}>确认</Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default EditMessageModal