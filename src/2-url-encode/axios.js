import axios from 'axios'
import { API_URL } from '../constants.js'

const axiosParamsInUrl = async () => {
  try {
    console.log('📢 [Axios] 測試 URL 編碼 ParamsInUrl:')
    const search = 'hello world'
    const symbol = '&$'
    const response = await axios.get(`${API_URL}/url-encoded?search=${search}&symbol=${symbol}`)
    console.log(response.data)
  } catch (error) {
    console.error('axiosParamsInUrl error:', error)
  }
}

const axiosAutoEncodeParams = async () => {
  try {
    console.log('📢 [Axios] 測試 URL 編碼 AutoEncodeParams:')
    const search = 'hello world'
    const symbol = '&$'
    const response = await axios.get(`${API_URL}/url-encoded`, {
      params: { search, symbol },
    })
    console.log(response.data)
  } catch (error) {
    console.error('axiosAutoEncodeParams error:', error)
  }
}

axiosParamsInUrl()
// axiosAutoEncodeParams()
