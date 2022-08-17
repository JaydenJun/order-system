/*
 * @Descripttion: 存放 所有登录 登出相关的接口请求
 * @version: 
 * @Author: LiLin7
 * @Date: 2022-08-16 10:14:31
 * @LastEditors: LiLin7
 * @LastEditTime: 2022-08-16 14:18:15
 */
// import service from '../utils/service'
import { getlogin } from './index'
/**
 * @params object {data} username:用户名 userpass:密码
 * **/
export function loginAdmin(data) { // 登录请求
  return getlogin('/loginadmin', data)
}

