/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// 引入ant组件
import { Input, Button, Table, Modal, Form, DatePicker, message } from "antd";
// 引入样式
import "./index.less";
// 引入请求
import { getUserList, modifyUser, delUser } from "../../api/userManage";
// 引入moment插件
import moment from "moment";
// 引入columns
import { columns } from "./utils/config.js";
// 引入修改用户弹框组件
import EditUser from "./components/editUser";

// 首先布局
// 丰富逻辑

const UserList = (props) => {
  const [dataSource, setDataSource] = useState([]); // 声明dataSource
  const [username, setUsername] = useState(""); // 用户名
  const [isModalVisible, setIsModalVisible] = useState(false); // 修改弹框展示状态
  const [celData, setCellData] = useState(null); // 修改弹框展示状态
  const [loading, setLoading] = useState(false); //列表请求状态

  // 初始化执行
  useEffect(() => {
    getList();
  }, []);

  // 方法
  // 请求用户列表数据
  function getList(username) {
    setLoading(true); // 展示表格请求
    getUserList(username).then((data) => {
      console.log(data);
      // data 就是后台返回的数据 需要给他赋值给 datasource
      setDataSource(data);
      setLoading(false); // 关闭表格请求
    });
  }
  function search() {
    // 搜索
    getList(username);
  }
  function usernameChange(event) {
    // 用户名改变
    setUsername(event.target.value);
  }
  function modify(record) {
    // 修改弹框展示事件
    setCellData(record);
    setIsModalVisible(true);
    console.log(record, isModalVisible);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onFinish(values) {
    // 校验成功事件
    const params = {
      ...values,
      regist_time: values.regist_time.format("YYYY-MM-DD"),
    };
    modifyUser(values.id, params)
      .then((data) => {
        console.log(data, "modifyuser");
        message.success("修改成功！");
        // 修改成功 则关闭弹框
        setIsModalVisible(false);
        // 并且 重新请求列表
        getList();
      })
      .catch((err) => {
        console.log(err);
        message.error("修改失败！");
      });
  }
  function onFinishFailed(errorInfo) {
    // 校验失败事件
    console.log("Failed:", errorInfo);
  }
  function del(id) {
    // 删除用户
    delUser(id).then((data) => {
      console.log(data, "delUser");
      // 提示用户
      message.success("删除成功！");
      // 更新列表
      getList();
    });
  }
  function handleCancel() {
    // 取消按钮
    setIsModalVisible(false);
  }
  return (
    <div className="user-list">
      {/* 上下两行布局 */}
      {/* 搜索项 */}
      <div className="search">
        <Input
          value={username}
          placeholder="请输入用户名"
          onChange={usernameChange}
        />
        <Button type="primary" onClick={search}>
          搜索
        </Button>
        <Button>添加</Button>
      </div>
      <div className="table">
        {/* columns 也可以做成函数将 函数参数传进去 */}
        <Table
          rowKey="id"
          loading={loading}
          dataSource={dataSource}
          columns={columns(modify, del)}
        />
      </div>
      <EditUser
        isModalVisible={isModalVisible}
        record={celData}
        getList={getList}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default UserList;
