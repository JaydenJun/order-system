/*
 * @Descripttion: 项目布局首页
 * @version: 
 * @Author: LiLin7
 * @Date: 2022-08-16 11:29:17
 * @LastEditors: LiLin7
 * @LastEditTime: 2022-08-16 11:30:46
 */
import React from 'react'
// 引入路由对象
import { Route, Switch, Redirect } from 'react-router-dom'
// 引入ant组件
import './index.css'
// 引入header组件
import Header from './components/header'
import LayoutMenu from './components/menu'

// 引入业务组件
import UserList from '../userList'
import Message from '../message'
import Analysis from '../analysis'

// 布局分析
// 实现header 头部内容
// 实现 左侧菜单
// 实现右侧内容区域
const Layout = (props) => {

  return (
    <div className='layout'>
      {/* 顶部区域 */}
      <Header />
      <div className='layout-main'>
        {/* 左侧菜单 */}
        <div className='sidebar'>
          <LayoutMenu />
        </div>
        {/* 右侧视图区域 */}
        <div className='main'>
          <Switch>
            {/* 重定向 exact精确匹配 */}
            <Redirect exact={true} to="/layout/userList" from="/layout" ></Redirect>
            {/* 用户列表 */}
            <Route path="/layout/userList" component={UserList}></Route>
            {/* 通讯信息 */}
            <Route path="/layout/message" component={Message}></Route>
            {/* 统计分析 */}
            <Route path="/layout/analysis" component={Analysis}></Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
export default Layout