import { API_URL } from '../constants.js'

const fetchWithoutEncode = async () => {
  try {
    console.log('📢 [Fetch] 測試 URL 編碼 WithoutEncode:')
    const search = 'hello world'
    const symbol = '&$'
    let res = await fetch(`${API_URL}/url-encoded?search=${search}&symbol=${symbol}`)
    let data = await res.json()
    console.log(data)
  } catch (error) {
    console.error('Fetch 發生錯誤:', error)
  }
}

const fetchManualEncode = async () => {
  try {
    console.log('📢 [Fetch] 測試 URL 編碼 ManualEncode:')
    const search = 'hello world'
    const symbol = '&$'
    let res = await fetch(
      `${API_URL}/url-encoded?search=${encodeURIComponent(search)}&symbol=${encodeURIComponent(symbol)}`
    )
    let data = await res.json()
    console.log(data)
  } catch (error) {
    console.error('Fetch 發生錯誤:', error)
  }
}

fetchWithoutEncode()
// fetchManualEncode()
