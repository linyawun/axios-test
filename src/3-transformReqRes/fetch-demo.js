import { API_URL } from '../constants.js'

/**
 * 使用 Fetch API 發送一般 JSON 請求
 * @returns {Promise<Object>} 解析後的 JSON 資料
 */
export async function fetchJsonResponse() {
  try {
    console.log('📢 [Fetch] 測試 JSON Response:')
    const response = await fetch(`${API_URL}/url-encoded?name=test`)
    const data = await response.json()
    console.log('response:', response)
    console.log('response.json():', data)
  } catch (error) {
    console.error('Error fetching JSON:', error)
    throw error
  }
}

/**
 * 使用 Fetch API 下載 CSV 檔案並觸發瀏覽器的下載行為
 */
export async function fetchBlobResponse() {
  try {
    console.log('📢 [Fetch] 測試 blob Response:')
    const response = await fetch(`${API_URL}/download-csv`)
    const filename = 'downloaded.csv'

    // 取得 blob 資料
    const blob = await response.blob()
    console.log('response:', response)
    console.log('response.blob():', blob)

    // 建立 Blob URL
    const url = window.URL.createObjectURL(blob)

    // 建立一個暫時的 <a> 元素來觸發下載
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    // 將連結加入文件中並觸發點擊
    document.body.appendChild(link)
    link.click()
    // 清理：移除連結和釋放 URL
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    console.log('✅ 檔案下載已開始')
  } catch (error) {
    console.error('Error downloading file:', error)
    throw error
  }
}
