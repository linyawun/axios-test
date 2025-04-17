import axios from 'axios'
import { API_URL } from '../constants.js'

// Test successful response (200)
export async function axiosSuccessResponse() {
  try {
    console.log('📢 [Axios] 測試 200 成功:')
    const response = await axios.get(`${API_URL}/success`)
    console.log('Success:', response.data)
  } catch (error) {
    handleError(error)
  }
}

// Test not found error (404)
export async function axiosNotFoundError() {
  try {
    console.log('📢 [Axios] 測試 404 錯誤:')
    await axios.get(`${API_URL}/not-found`)
  } catch (error) {
    handleError(error)
  }
}

// Test server error (500)
export async function axiosServerError() {
  try {
    console.log('📢 [Axios] 測試 500 錯誤:')
    await axios.get(`${API_URL}/error`)
  } catch (error) {
    handleError(error)
  }
}

// Error handler function
function handleError(error) {
  if (error.response) {
    // Server responded with non-2xx status
    console.error('Error:', `${error.response.status} - ${error.response.data.message}`)
  } else if (error.request) {
    // Request was made but no response received
    console.error('Error: No response received')
  } else {
    // Something happened in setting up the request
    console.error('Error:', error.message)
  }
}
