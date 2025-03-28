import axios, { AxiosInstance } from 'axios';

const axiosDemo = async (): Promise<void> => {
  try {
    const instance1 = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
    const instance2 = instance1.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
    instance2.get('/posts/1').then(res => console.log(res.data))

    // Commented examples below show additional axios features
    /*
    // Example with URL parameters
    const search: string = 'hello world';
    const symbol: string = '&$';
    const response = await axios.get('https://jsonplaceholder.typicode.com/url-encoded', {
      params: { search, symbol }
    });
    console.log(response.data);

    // Example with response type
    const textResponse = await axios.get('https://jsonplaceholder.typicode.com/convert', { 
      responseType: 'text' 
    });
    console.log('Raw:', textResponse.data);
    console.log('Parsed JSON:', JSON.parse(textResponse.data as string));

    // Error handling example
    try {
      await axios.get('https://jsonplaceholder.typicode.com/error');
    } catch (error: any) {
      console.log('Axios error:', error.message);
      console.log('Status:', error.response?.status);
      console.log('Data:', error.response?.data);
    }
    */
  } catch (error) {
    console.error('Axios demo error:', error);
  }
};

axiosDemo(); 