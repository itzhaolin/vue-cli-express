import axios from 'axios'

// const service = axios.create({
//   baseURL: '/api',
//   timeout: 15000,
//   headers: {
//     format: 'JSON'
//   }
// })

// export default service

// export const http = (method, data) => service({
//   url: method,
//   method: 'post',
//   headers: {
//     method
//   },
//   data
// })
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const http = (method, data) => axios.post(method, data)
