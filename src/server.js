import express from 'express'
import { API_URL, PORT } from './constants.js'
const app = express()

// CORS middleware configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3006')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  // Handle OPTIONS method
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// 允許解析 JSON 和 URL 查詢參數
app.use(express.json())

// ✅ 測試 URL 編碼
app.get('/url-encoded', (req, res) => {
  res.json({ receivedQuery: req.query })
})

// ✅ 測試請求與回應的資料轉換
app.get('/text-response', (req, res) => {
  res.type('text/plain') // 以純文字回應
  res.send(JSON.stringify({ message: 'this is a JSON but the response is text/plain' }))
})

// ✅ 測試 blob 回應
app.get('/download-csv', (req, res) => {
  // 模擬一個 CSV 檔案內容
  const csvContent = `Name,Age,City
John Doe,30,New York
Jane Smith,25,Los Angeles
Bob Johnson,35,Chicago`

  // 設定檔案下載的 headers
  res.set({
    'Content-Type': 'text/csv',
    'Content-Disposition': 'attachment; filename="users.csv"',
    'Content-Length': Buffer.byteLength(csvContent),
  })

  res.send(csvContent)
})

// ✅ 測試錯誤處理機制
app.get('/error', (req, res) => {
  res.status(500).json({ error: 'server internal error' })
})

// ✅ 測試攔截器
app.get('/interceptors', (req, res) => {
  const authHeader = req.headers.authorization
  if (authHeader === 'Bearer secret-token') {
    res.json({ message: 'authorization success' })
  } else {
    res.status(401).json({ error: 'unauthorized' })
  }
})

// ✅ 測試 JSON 請求
app.post('/json-request', (req, res) => {
  console.log('Received body:', req.body)
  res.json({
    message: 'JSON request received',
    receivedData: req.body,
  })
})

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`server is running on ${API_URL}`)
})
