import { API_URL } from '../constants.js';

/**
 * 展示發送 JSON 資料的請求
 */
export async function fetchPostJson() {
  try {
    console.log('📢 [Fetch] transform request - Post Json:');

    const data = {
      name: 'John Doe',
      age: 30,
      city: 'New York',
    };

    // Fetch 需要手動:
    // 1. 設定 Content-Type: application/json
    // 2. 將 JavaScript 物件轉換為 JSON 字串
    const response = await fetch(`${API_URL}/json-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('request data:', data);
    console.log('response.json():', result);
  } catch (error) {
    console.error('Error posting JSON:', error);
    throw error;
  }
}

/**
 * 取得 JSON response
 * @returns {Promise<Object>} 解析後的 JSON 資料
 */
export async function fetchJsonResponse() {
  try {
    console.log('📢 [Fetch] transform response - Json Response:');
    const response = await fetch(`${API_URL}/url-encoded?name=test`);
    const data = await response.json();
    console.log('response:', response);
    console.log('response.json():', data);
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}

/**
 * 使用 Fetch API 下載 CSV 檔案並觸發瀏覽器的下載行為
 */
export async function fetchBlobResponse() {
  try {
    console.log('📢 [Fetch] transform response - Blob Response:');
    const response = await fetch(`${API_URL}/download-csv`);
    const filename = 'downloaded.csv';

    // 取得 blob 資料
    const blob = await response.blob();
    console.log('response:', response);
    console.log('response.blob():', blob);

    // 建立 Blob URL
    const url = window.URL.createObjectURL(blob);

    // 建立一個暫時的 <a> 元素來觸發下載
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    // 將連結加入文件中並觸發點擊
    document.body.appendChild(link);
    link.click();
    // 清理：移除連結和釋放 URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    console.log('✅ File download started');
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
}
