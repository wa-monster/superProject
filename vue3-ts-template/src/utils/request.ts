import axios from "axios"
import store from "../store"
import { ElMessage, ElMessageBox } from "element-plus"
const baseURL = process.env.VITE_BASE_URL
const service = axios.create({
  baseURL,
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      // config.headers['X-token'] = getToken()
    }
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 请求响应器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 20000) {
      ElMessage({
        message: res.message,
        type: "error",
        duration: 5 * 1000,
      })

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        ElMessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录", "确定登出", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject("error")
    } else {
      return response.data
    }
  },
  (error) => {
    console.log("err" + error) // for debug
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service