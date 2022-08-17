import React, { useState } from 'react'

// 引入ant组件
import { Form, Input, Button, Menu } from 'antd'

import './index.css'
// 首先完成布局
// 然后再实现逻辑

const Login = (porps) => {
    // state 声明
    const [selectdKey, setSelectedKey] = useState(['mail']) // 默认选中菜单

    function changeSelectedKey(params) { // 改变菜单默认选中值
        console.log(params)
        setSelectedKey([params.key])
    }
    return (
        <div className='login'>
            <div className='logincont'>
                <Menu mode="horizontal" className='login-menu' onClick={changeSelectedKey} selectedKeys={selectdKey} defaultSelectedKeys={['mail']}>
                    <Menu.Item key="mail">
                        邮箱
                    </Menu.Item>
                    <Menu.Item key="phone">
                        手机号
                    </Menu.Item>
                </Menu>
                <Form className='login-form'
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                >
                    <div className='login-title'>
                        <h2>手机号登录</h2>
                    </div>
                    {/*手机号 */}
                    <Form.Item label='手机号'>
                        <Input placeholder='请输入手机号' />
                    </Form.Item>
                    {/*密码 */}
                    <Form.Item label='密码'>
                        <Input type="password" placeholder='请输入密码' />
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login