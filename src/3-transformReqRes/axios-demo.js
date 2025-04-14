import axios from 'axios'

const axiosDemo = async () => {
  try {
    const textResponse = await axios.get('https://jsonplaceholder.typicode.com/convert', {
      responseType: 'text',
    })
    console.log('Raw:', textResponse.data)
    console.log('Parsed JSON:', JSON.parse(textResponse.data))
  } catch (error) {
    console.error('Error:', error)
  }
}

axiosDemo()
