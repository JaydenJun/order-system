//该模块封装各种请求
import service from '../utils/service'

//post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(res => {
        if (res.data) {
          resolve(res.data)
        } else {
          resolve(res)
        }
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

//get请求
export function get(url, params) {

  //拼接请求参数,请求参数默认为对象
  let queryStr = '';
  let arr = [];
  for (var key in params) {
    if (params[key]) {
      //如果有值
      arr.push(`${key}=${params[key]}`)
    }
  }
  queryStr = arr.join('&')


  return new Promise(function (resolve, reject) {
    service.get(url + "?" + queryStr)
      .then(res => {
        if (!res.data) {
          resolve(res);
        }
        resolve(res.data);
      }, err => {
        reject(err);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//delete请求
export function remove(url, id) {
  return new Promise(function (resovle, reject) {
    service.delete(url + "/" + id)
      .then(res => {
        if (!res.data) {
          resovle(res);
        }
        resovle(res.data);
      }, err => {
        reject(err);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//put请求
export function update(url, id, data) {
  return new Promise(function (resovle, reject) {
    service.put(url + "/" + id, data)
      .then(res => {
        if (!res.data) {
          resovle(res);
        }
        resovle(res.data);
      }, err => {
        reject(err);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//登录(get)
export function getlogin(url, params) {
  let queryStr = queryStrFn(params) // 转换成 query参数  参数名=参数&参数名=参数
  return new Promise(function (resolve, reject) {
    service.get(url + "?" + queryStr)
      .then(res => {
        if (res.data.length !== 0) {
          //查到数据
          const { email, username, paths, zsgc } = res.data[0]
          resolve({
            code: 1,
            token: ranToken(),
            email,
            username,
            paths, // 之后大家在系统当中可以看到多少个菜单 
            curd: zsgc
          });
        } else {
          //未查到数据
          reject(res.data)
        }
      });
  });
}

//随机一个模拟token
function ranToken() {
  let token = ''
  for (let i = 1; i <= 32; i++) {
    const n = Math.floor(Math.random() * 16.0).toString(16)
    token += n
  }
  return token
}

//拼接请求参数
function queryStrFn(json, slice = '&') {
  return Object.keys(json)
    .reduce((acc, item) => {
      return String(acc) + item + '=' + json[item] + slice;
    }, '')
    .slice(0, -1);
}