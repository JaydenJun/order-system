import React, { useState } from "react";
// 引入antd组件
import { Menu } from "antd";
// 引入样式
import "./index.css";
// 引入请求
import { loginAdmin } from '../../api/login'
// 引入路由钩子
import { useHistory } from 'react-router-dom'
// 引入手机号组件
import Tell from './components/tell'
// 引入邮箱组件
import Mail from './components/mail'
// 完成布局
// 实现逻辑
const Login = (porps) => {
  // state声明
  const [selectdKey, setSelectedKey] = useState(["mail"]); // 默认选中菜单

  // 声明路由
  const history = useHistory()
  // 方法
  function changeSelectedKey(params) {//改变菜单默认选中值
    console.log(params)
    setSelectedKey([params.key]);
  }

  return (
    <div className="login">
      <div className="logincont">
        <Menu
          mode="horizontal"
          className="login-menu"
          onClick={changeSelectedKey}
          selectedKeys={selectdKey}
          defaultSelectedKeys={["phone"]}
        >
          <Menu.Item key="phone">手机号</Menu.Item>
          <Menu.Item key="mail">邮箱</Menu.Item>
        </Menu>
        { //selectdKey.includes('phone')
          // 切换 form表单的展示就是根据 当前选择的菜单项来判断
          selectdKey.indexOf('phone') >= 0 ? (<Tell history={history} loginAdmin={loginAdmin} />)
            : (<Mail history={history} loginAdmin={loginAdmin} />)
        }
      </div>
    </div>
  );
};

export default Login;
