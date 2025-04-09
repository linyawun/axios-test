import axios from 'axios'

// axios 基本用法

// 1. 直接用 axios 請求
// axios(config)
console.log('📢 [axios] 基本用法: ')
axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  headers: { 'X-Custom-Header': 'foobar' },
})
  .then(response => {
    console.log('--- axios(config) ---')
    console.log(response.data)
  })
  .catch(error => {
    console.error(error)
  })

// axios(url[, config])
axios('https://jsonplaceholder.typicode.com/posts/1', {
  headers: { 'X-Custom-Header': 'foobar' },
})
  .then(response => {
    console.log('--- axios(url[, config]) ---')
    console.log(response.data)
  })
  .catch(error => {
    console.error(error)
  })

// axios.requestMethod
axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('--- axios.requestMethod ---')
    console.log(response.data)
  })
  .catch(error => {
    console.error(error)
  })

// 2. 建立 axios instance 來請求
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
})
apiClient.get('/posts/1').then(res => {
  console.log('--- apiClient.get ---')
  console.log(res.data)
})
