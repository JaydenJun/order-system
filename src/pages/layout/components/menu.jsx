import React, { useState } from 'react'
import { Menu, Switch } from 'antd';
// 引入路由
import { useHistory } from 'react-router-dom'
// 引入menu配置数据
import react, { usestate, component, menuList, arr } from '../utils/config'
const { SubMenu } = Menu;
console.log(arr, 'arr', React)
console.log('自定义react', usestate, component, react)
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
        console.log(menuList)
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
                defaultSelectedKeys={['userList']}
                defaultOpenKeys={['userMange']}
                mode={mode}
                theme={theme}
            >
                {menuGenerate()}
            </Menu>
        </div>
    );
}

export default LayoutMenu
