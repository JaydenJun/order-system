/*
 * @Descripttion: 邮箱表单组件
 * @version: 
 * @Author: LiLin7
 * @Date: 2022-08-16 16:45:57
 * @LastEditors: LiLin7
 * @LastEditTime: 2022-08-16 17:46:23
 */
import React from 'react'
// 引入ant组件
import { Form, Input, Button, message } from 'antd'

const Mail = (props) => {

  const { loginAdmin, history } = props

  // 方法
  function emailFinish(values) { // 邮箱校验成功事件
    // vlaues 校验成功的表单值
    console.log(values, 'emailFinish')
    // 将参数 转化
    const params = {
      email: values.email,
      userpass: values.password
    }
    // 请求后台接口
    loginAdmin(params).then(data => {
      console.log(data)
      // 成功回调
      // 提示用户
      message.success('登录成功')
      // 跳转到系统
      history.push('/layout')
    }).catch(err => {
      console.log(err)
      // 提示用户 登录失败
      message.error('登录失败')
    })
  }
  return (
    <Form
      className="login-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      onFinish={emailFinish}
    >
      <div className="login-title">
        <h2>邮箱登录</h2>
      </div>
      {/* 邮箱和密码 */}
      <Form.Item
        label="邮箱"
        name="email"
        rules={[{ required: true, message: '请输入邮箱!' }]}
      >
        <Input placeholder="请输入邮箱" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input type="password" placeholder="请输入密码" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Mail