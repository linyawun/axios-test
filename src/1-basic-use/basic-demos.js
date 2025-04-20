import axios from 'axios';

export async function axiosConfigDemo() {
  console.log('📢 [axios] Basic Usage - axios(config): ');
  try {
    const response = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      headers: { 'X-Custom-Header': 'foobar' },
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function axiosUrlConfigDemo() {
  console.log('📢 [axios] Basic Usage - axios(url, config): ');
  try {
    const response = await axios(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: { 'X-Custom-Header': 'foobar' },
      }
    );
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function axiosMethodDemo() {
  console.log('📢 [axios] Basic Usage - axios.method(): ');
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function axiosInstanceDemo() {
  console.log('📢 [axios] Basic Usage - axios.create(): ');
  try {
    const apiClient = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    });
    const response = await apiClient.get('/posts/1');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function axiosInstanceCreateDemo() {
  console.log('📢 [axios] Basic Usage - instance.create(): ');
  try {
    const instance1 = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    const instance2 = instance1.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    const response = await instance2.get('/posts/1');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export function axiosInstanceComparisonDemo() {
  console.log('📢 [axios] Instance vs Global Axios Comparison:');
  console.log('\n1. Instance Methods:');
  const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  console.log('apiClient.isCancel()', apiClient.isCancel?.());
  console.log('apiClient.CancelToken', apiClient.CancelToken);
  console.log('apiClient.HttpStatusCode', apiClient.HttpStatusCode);

  console.log('\n2. Global Axios Methods:');
  console.log('axios.isCancel()', axios.isCancel());
  console.log('axios.CancelToken', axios.CancelToken);
  console.log('axios.HttpStatusCode', axios.HttpStatusCode);
}
