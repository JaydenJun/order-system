/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import * as echarts from 'echarts';
const Bar = (props) => {
    const { data } = props
    let barData = []

    useEffect(() => {
        console.log(data, '用户数据')
        barData = [
            data.filter(item => (item.age > 0 && item.age <= 10)).length,
            data.filter(item => (item.age > 10 && item.age <= 20)).length,
            data.filter(item => (item.age > 20 && item.age <= 30)).length,
            data.filter(item => (item.age > 30 && item.age <= 40)).length,
            data.filter(item => (item.age > 40 && item.age <= 50)).length,
            data.filter(item => (item.age > 50 && item.age <= 60)).length,
            data.filter(item => (item.age > 60 && item.age <= 70)).length,
            data.filter(item => (item.age > 70 && item.age <= 80)).length,
            data.filter(item => (item.age > 80 && item.age <= 90)).length,
            data.filter(item => (item.age > 90 && item.age <= 100)).length,
        ]
        renderBar()
    }, [data])
    // 方法
    function renderBar() { // 渲染柱状图
        var myChart = echarts.init(document.getElementById('analysis-bar'));
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: barData,
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }
            ]
        };

        option && myChart.setOption(option);
    }
    // {/* 柱状图 */}
    return (<div id='analysis-bar'></div>)
}
export default Bar