import React, { useState } from 'react'
import { Menu, Switch } from 'antd';
// 引入路由
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu;

// 声明菜单数据
const menuList = [
    {
        key: 'userMange',
        title: '用户管理',
        children: [
            {
                key: 'userList',
                title: '用户列表',
                path: '/layout/userList'
            },
            {
                key: 'message',
                title: '通讯信息',
                path: '/layout/message'
            },
            {
                key: 'analysis',
                title: '统计分析',
                path: '/layout/analysis'
            },
        ]
    },
    {
        key: 'businessMange',
        title: '商户管理',
        children: [
            { key: 'businessList', title: '商户列表' },
            { key: 'account', title: '登录账户' },
            { key: 'businessAnalysis', title: '商户分析' },
        ]
    },
    {
        key: 'orderMange',
        title: '订单管理',
        children: [
            { key: 'orderList', title: '订单列表' },
            { key: 'orderAnalysis', title: '订单分析' },
        ]
    },
    { key: 'payments', title: '收支管理' },
    { key: 'platform', title: '平台管理' },
    {
        key: 'safe', title: '安全管理', children: [
            {
                key: '1', title: 'test1',
                children: [
                    { key: '1-2', title: 'test1-2' },
                    { key: '1-3', title: 'test1-3' },
                ]
            },
            { key: '2', title: 'test2' },
            { key: '3', title: 'test3' },
        ]
    },

]

const LayoutMenu = () => {
    // state声明
    const [mode, setMode] = useState('inline') // 菜单类型
    const [theme, setTheme] = useState('light') // 主题

    // 路由声明
    const history = useHistory()

    // 方法声明
    const changeMode = value => { // 改变菜单类型
        setMode(value ? 'vertical' : 'inline')
    };

    const changeTheme = value => { // 改变主题
        setTheme(value ? 'dark' : 'light')
    };
    // 生成菜单子项的方法
    const menuGenerate = () => {
        return menuList.map(item => {
            // return item.children ? (
            //     <SubMenu key={item.key} title={item.title}>
            //         {/* 第一层遍历 */}
            //         {item.children.map(menu => {
            //             let temp = null
            //             if (menu.children) {
            //                 temp = (
            //                     <SubMenu key={menu.key} title={menu.title}>
            //                         {/* 第二层遍历 */}
            //                         {menu.children.map(child => {
            //                             return (
            //                                 <Menu.Item key={child.key}>
            //                                     {child.title}
            //                                 </Menu.Item>
            //                             )
            //                         })}
            //                     </SubMenu>
            //                 )
            //             } else {
            //                 temp = (
            //                     <Menu.Item key={menu.key}>
            //                         {menu.title}
            //                     </Menu.Item>
            //                 )
            //             }
            //             return temp
            //         })}
            //     </SubMenu>
            // ) : (<Menu.Item key={item.key}>{item.title}</Menu.Item>)
            return twoMenuGenerate(item)
        })
    }
    /**
     * @description 生成二级菜单
     * @params object {params} key title children
     * **/
    const twoMenuGenerate = (params) => {
        return params.children ? (<SubMenu key={params.key} title={params.title}>
            {params.children.map(menu => {
                // 递归调用自己
                return twoMenuGenerate(menu)
            })}
        </SubMenu>) : (<Menu.Item key={params.key} onClick={() => menuClick(params)}>{params.title}</Menu.Item>)
    }
    const menuClick = (params) => { // 菜单点击事件
        // 让右侧视图区域展示菜单相应的路由页面
        // 跳转路由
        console.log(params)
        history.push(params.path)
    }

    return (
        <div>
            <Switch onChange={changeMode} /> 改变菜单展示
            <span className="ant-divider" style={{ margin: '0 1em' }} />
            <Switch onChange={changeTheme} /> 改变主题
            <br />
            <br />
            <Menu
                style={{ width: 166 }}
                defaultSelectedKeys={['userMange']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
            >
                {menuGenerate()}
            </Menu>
        </div>
    );
}

export default LayoutMenu
