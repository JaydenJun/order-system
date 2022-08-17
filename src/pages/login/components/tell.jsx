/*
 * @Descripttion: 手机号表单组件
 * @version: 
 * @Author: LiLin7
 * @Date: 2022-08-16 16:45:50
 * @LastEditors: LiLin7
 * @LastEditTime: 2022-08-16 17:45:16
 */
import React from 'react'
// 引入ant组件
import { Form, Input, Button, message } from 'antd'

// 引入请求
// import { loginAdmin } from '../../../api/login'
// // 引入路由钩子
// import { useHistory } from 'react-router-dom'

const Tell = (props) => {
  console.log(props, 'tell')
  const { loginAdmin, history } = props
  // 声明路由
  // const history = useHistory()

  // 方法声明
  function onFinish(values) { // 校验成功的回调事件
    // 校验成功 则拿到数据去请求接口
    console.log(values, 'onFinish')
    // 处理values
    const params = {
      username: values.phone,
      userpass: values.password
    }
    loginAdmin(params).then(data => {
      console.log(data)
      localStorage.setItem('token', data.token) //保存token 根据token校验是否登录
      // 提示登录成功
      message.success('登录成功')
      // 登录成功则跳到系统
      history.push('/layout')
      // 失败则提示登录失败
    }).catch(err => {
      console.log(err)
      // 给出错误提示
      message.error('登录失败')
    })
  }
  function onFinishFailed() { // 校验失败的回调事件
    // 校验失败 则提示用户重新提交
  }
  return (<Form
    className="login-form"
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 16 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <div className="login-title">
      <h2>手机号登录</h2>
    </div>
    {/* 手机号和密码 */}
    <Form.Item
      label="手机号"
      name="phone"
      rules={[{ required: true, message: '请输入手机号!' }]}
    >
      <Input placeholder="请输入手机号" />
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
  </Form>)
}
export default Tell