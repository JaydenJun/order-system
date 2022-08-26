/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import * as echarts from 'echarts';
const Pie = (props) => {
    const { data } = props
    let pieData = []

    useEffect(() => {
        console.log(data, '用户数据')
        pieData = [
            { value: data.filter(item => item.sex === '男').length, name: '男生' },
            { value: data.filter(item => item.sex === '女').length, name: '女生' },
        ]
        renderPie()
    }, [data])
    // 方法
    function renderPie() { // 渲染饼图
        var myChart = echarts.init(document.getElementById('analysis-container')); // 初始化
        let option = {
            title: {
                text: '注册用户性别占比分析图',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: { // 图例组件
                top: '7%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: pieData
                    //  [
                    //     { value: 1048, name: 'Search Engine' },
                    //     { value: 735, name: 'Direct' },
                    //     { value: 580, name: 'Email' },
                    //     { value: 484, name: 'Union Ads' },
                    //     { value: 300, name: 'Video Ads' }
                    // ]
                }
            ]
        };
        option && myChart.setOption(option);
    }
    // {/* 柱状图 */}
    return (<div id='analysis-container'></div>)
}
export default Pie