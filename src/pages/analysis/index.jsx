import React, { useEffect, useState } from 'react'
// 引入样式
import './index.less'
// 引入请求
import { getUserList } from '../../api/userManage'
// 引入柱状图组件
import Bar from './components/bar'
// 引入饼图组件
import Pie from './components/pie'


const Analysis = (props) => {

    // 声明用户数据
    const [data, setData] = useState([])
    useEffect(() => {
        getList()
    }, [])

    // 方法
    function getList() { //获取用户数据
        getUserList().then(data => {
            setData(data)
        })
    }

    return (
        <div className='analysis'>
            {/* 饼图 */}
            {/* <div id='analysis-container'></div> */}
            <Pie data={data} />
            {/* 柱状图 */}
            {/* <div id='analysis-bar'></div> */}
            <Bar data={data} />
        </div>
    )
}

export default Analysis