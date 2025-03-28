const axios = require('axios')

const axiosDemo = async () => {
  try {
    // axios('https://jsonplaceholder.typicode.com/posts/1', {
    //   headers: { 'X-Custom-Header': 'foobar' },
    // })
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error))
    // axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/posts/1',
    //   headers: { 'X-Custom-Header': 'foobar' },
    // })
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error))
    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error))
    const instance1 = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
    const instance2 = instance1.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
    instance2.get('/posts/1').then(res => console.log(res.data))

    // console.log('📢 [Axios] 測試 URL 編碼:')
    // const search = 'hello world'
    // const symbol = '&$'
    // const query1 = `http://localhost:3000/url-encoded?search=${search}&symbol=${symbol}`
    // const query2 = ['http://localhost:3000/url-encoded', { params: { search, symbol } }]
    // let res = await axios.get(...query3)
    // console.log(res.data)

    // console.log('📢 [Axios] 測試資料轉換 (text/plain → JSON):')
    // res = await axios.get('http://localhost:3000/convert', { responseType: 'text' })
    // console.log('Raw:', res.data)
    // console.log('Parsed JSON:', JSON.parse(res.data))

    // console.log('📢 [Axios] 測試錯誤處理:')
    // try {
    //   res = await axios.get('http://localhost:3000/error')
    // } catch (error) {
    //   console.log('Axios 自動拋錯:', error.message)
    //   console.log('Status:', error.response?.status)
    //   console.log('Data:', error.response?.data)
    // }

    // console.log('📢 [Axios] 測試攔截器 (加上 Authorization):')
    // res = await axios.get('http://localhost:3000/interceptors', {
    //   headers: { Authorization: 'Bearer secret-token' },
    // })
    // console.log(res.data)
  } catch (error) {
    console.error('Axios 發生錯誤:', error)
  }
}

axiosDemo()
