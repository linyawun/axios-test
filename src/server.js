import express from 'express';
import { API_URL, PORT } from './constants.js';
const app = express();

// CORS middleware configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3006');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  // Handle OPTIONS method
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// 允許解析 JSON 和 URL 查詢參數
app.use(express.json());

// ✅ 測試 Success response (200)
app.get('/success', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: 'Operation successful',
    },
  });
});

// ✅ 測試 Not Found (404)
app.get('/not-found', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Resource not found',
  });
});

// ✅ 測試 Server Error (500)
app.get('/error', (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// ✅ 測試 URL 編碼
app.get('/url-encoded', (req, res) => {
  res.json({ receivedQuery: req.query });
});

// ✅ 測試非法 JSON 回應
app.get('/invalid-json', (req, res) => {
  // do not fix this json
  res.send({ name: test });
});

// ✅ 測試 blob 回應
app.get('/download-csv', (req, res) => {
  // 模擬一個 CSV 檔案內容
  const csvContent = `Name,Age,City
John Doe,30,New York
Jane Smith,25,Los Angeles
Bob Johnson,35,Chicago`;

  // 設定檔案下載的 headers
  res.set({
    'Content-Type': 'text/csv',
    'Content-Disposition': 'attachment; filename="users.csv"',
    'Content-Length': Buffer.byteLength(csvContent),
  });

  res.send(csvContent);
});

// ✅ 測試攔截器
app.get('/interceptors', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader === 'Bearer secret-token') {
    res.json({ message: 'authorization success' });
  } else {
    res.status(401).json({ error: 'unauthorized' });
  }
});

// ✅ 測試 JSON 請求
app.post('/json-request', (req, res) => {
  console.log('Received body:', req.body);
  res.json({
    message: 'JSON request received',
    receivedData: req.body,
  });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running on ${API_URL}`);
});
