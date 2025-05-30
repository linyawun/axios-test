import axios from 'axios';
import { API_URL } from '../constants.js';

/**
 * 展示發送 JSON 資料的請求
 */
export async function axiosPostJson() {
  try {
    console.log('📢 [Axios] transform request - Post Json:');

    const data = {
      name: 'John Doe',
      age: 30,
      city: 'New York',
    };

    // Axios 會自動:
    // 1. 設定 Content-Type: application/json
    // 2. 將 JavaScript 物件轉換為 JSON 字串
    const response = await axios.post(`${API_URL}/json-request`, data);

    console.log('request data:', data);
    console.log('response.data:', response.data);
  } catch (error) {
    console.error('Error posting JSON:', error);
    throw error;
  }
}

/**
 * 取得 JSON response
 * @returns {Promise<Object>} 解析後的 JSON 資料
 */
export async function axiosJsonResponse() {
  try {
    console.log('📢 [Axios] transform response - Json Response:');
    const response = await axios.get(`${API_URL}/url-encoded?name=test`);
    console.log('response:', response);
    console.log('response.data:', response.data);
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}

/**
 * 下載 CSV 檔案並觸發瀏覽器的下載行為
 */
export async function axiosBlobResponse() {
  try {
    console.log('📢 [Axios] transform response - Blob Response:');
    const response = await axios.get(`${API_URL}/download-csv`, {
      responseType: 'blob',
    });
    const filename = 'downloaded.csv';

    console.log('response:', response);
    console.log('response.data:', response.data);

    // 建立 Blob URL
    const url = window.URL.createObjectURL(new Blob([response.data]));

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

/**
 * 測試非法 JSON 回應
 */
export async function axiosInvalidJsonResponse() {
  try {
    console.log('📢 [Axios] transform response - Invalid Json Response:');
    const response = await axios.get(`${API_URL}/invalid-json`, {
      transitional: {
        silentJSONParsing: false,
      },
      responseType: 'json',
    });
    console.log('response:', response);
    console.log('response.data:', response.data);
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
}
