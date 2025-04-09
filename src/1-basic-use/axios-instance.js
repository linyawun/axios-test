import axios from 'axios'

// AxiosInstance 沒有 isCancel()、 isAxiosError() 等方法可以用、不能取得 Cancel、CancelToken、HttpStatusCode 等屬性
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})
console.log('apiClient.isCancel()', apiClient.isCancel())
console.log('apiClient.CancelToken', apiClient.CancelToken)
console.log('apiClient.HttpStatusCode', apiClient.HttpStatusCode)

// 全局 axios 有 isCancel()、 isAxiosError() 等方法可以用、可以取得 Cancel、CancelToken、HttpStatusCode 等屬性
console.log('axios.isCancel()', axios.isCancel())
console.log('axios.CancelToken', axios.CancelToken)
console.log('axios.HttpStatusCode', axios.HttpStatusCode)
