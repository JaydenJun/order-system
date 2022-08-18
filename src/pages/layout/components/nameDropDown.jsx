import React from 'react'
// 引入路由对象
import { useHistory } from 'react-router-dom';
const NameDropDown = (props) => {

    const loginCount = 100 //  登录次数
    const orderCount = 200 // 下单量
    const good = 300 // 好评量
    const integral = 300 // 积分
    const safe = '最高权限' // 积分
    // 声明路由
    const history = useHistory()

    // 方法
    function logout() { // 退出
        // 跳转到登录页
        history.push('/login')
        // 去除localstorage的信息 
        localStorage.clear()
        // localStorage.removeItem('token') // 比较繁琐，只能单个移除
    }
    return (
        <div className='dropdown'>
            <div className='dropdown-top'><span>我的账户</span><span onClick={logout}>退出登录</span></div>
            {/* 登录 下单 好评 积分 安全级别 */}
            <div className='dropdown-item'><span>登录</span><span>{loginCount}次</span></div>
            <div className='dropdown-item'><span>下单</span><span>{orderCount}个</span></div>
            <div className='dropdown-item'><span>好评</span><span>{good}个</span></div>
            <div className='dropdown-item'><span>积分</span><span>{integral}分</span></div>
            <div className='dropdown-item'><span>安全级别</span><span>{safe}</span></div>
        </div>
    )
}

export default NameDropDown