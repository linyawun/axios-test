const fetchDemo = async () => {
  try {
    console.log('📢 [Fetch] 測試 URL 編碼:')
    const search = 'hello world'
    const symbol = '&$'
    const query1 = `http://localhost:3000/url-encoded?search=${search}&symbol=${symbol}`
    const query2 = `http://localhost:3000/url-encoded?search=${encodeURIComponent(search)}&symbol=${encodeURIComponent(
      symbol
    )}`
    let res = await fetch(query2)
    let data = await res.json()
    console.log(data)

    console.log('📢 [Fetch] 測試資料轉換 (text/plain → JSON):')
    res = await fetch('http://localhost:3000/convert')
    let text = await res.text()
    console.log('Raw:', text)
    console.log('Parsed JSON:', JSON.parse(text))

    console.log('📢 [Fetch] 測試錯誤處理:')
    res = await fetch('http://localhost:3000/error')
    console.log('Status:', res.status) // Fetch 不會拋錯
    data = await res.json()
    console.log(data)

    console.log('📢 [Fetch] 測試攔截器 (模擬未授權):')
    res = await fetch('http://localhost:3000/interceptors', {
      headers: { Authorization: 'Bearer wrong-token' },
    })
    console.log('Status:', res.status)
    data = await res.json()
    console.log(data)
  } catch (error) {
    console.error('Fetch 發生錯誤:', error)
  }
}

fetchDemo()
