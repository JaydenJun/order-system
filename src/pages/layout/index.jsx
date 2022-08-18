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
import { useHistory } from 'react-router-dom';
// 引入ant组件
import './index.css'
// 引入header组件
import Header from './components/header'

// 布局分析
// 实现header 头部内容
// 实现 左侧菜单
// 实现右侧内容区域
const Layout = (props) => {

  // 声明路由
  const history = useHistory()
  
  return (
    <div className='layout'>
      {/* 顶部区域 */}
      <Header />
      <div className='layout-main'>
        {/* 左侧菜单 */}
        <div className='sidebar'>左侧菜单</div>
        {/* 右侧视图区域 */}
        <div className='main'>右侧视图区域</div>
      </div>
    </div>
  )
}
export default Layout