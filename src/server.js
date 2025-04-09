import express from 'express'
import { API_URL, PORT } from './constants.js'
const app = express()

// 允許解析 JSON 和 URL 查詢參數
app.use(express.json())

// ✅ 測試 URL 編碼
app.get('/url-encoded', (req, res) => {
  res.json({ receivedQuery: req.query })
})

// ✅ 測試請求與回應的資料轉換
app.get('/convert', (req, res) => {
  res.type('text/plain') // 以純文字回應
  res.send(JSON.stringify({ message: '這是一個 JSON 但回應是 text/plain' }))
})

// ✅ 測試錯誤處理機制
app.get('/error', (req, res) => {
  res.status(500).json({ error: '伺服器內部錯誤' })
})

// ✅ 測試攔截器
app.get('/interceptors', (req, res) => {
  const authHeader = req.headers.authorization
  if (authHeader === 'Bearer secret-token') {
    res.json({ message: '授權成功' })
  } else {
    res.status(401).json({ error: '未授權' })
  }
})

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器運行在 ${API_URL}`)
})
