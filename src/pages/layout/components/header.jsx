import React,{useState} from 'react'
// 引入ant图标组件
import { DownOutlined, UpOutlined } from '@ant-design/icons';
// 引入DropDown组件
import NameDropDown from './nameDropDown'

const Header = (props)=>{
      // 声明
  const messageCount = 0 // 消息条数
  const username = localStorage.getItem('username') //用户名
  const [nameDropDown, setNameDropDown] = useState(false) // 控制用户下拉项展示的内容

  // 方法
  function nameClick() { // 点击触发下方内容展示
    setNameDropDown(!nameDropDown) // 对原来的状态取反
  }
    return (
        <div className='header'>
        <div className='title'>点餐管理系统</div>
        <div className='message'>
          <span className='name'>消息</span><span className='count'>{messageCount}</span>
        </div>
        <div className='username'>
          <span className='lanuage'>欢迎您</span>
          <div className='name'>
            <div onClick={nameClick}>{username} {nameDropDown ? (<UpOutlined />) : (<DownOutlined />)}</div>
            {nameDropDown ? (<NameDropDown />) : null}
          </div>
        </div>
      </div>
    )
}

export default Header