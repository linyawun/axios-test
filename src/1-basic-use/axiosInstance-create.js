import axios from 'axios';

const axiosInstanceCreate = async () => {
  try {
    const instance1 = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    const instance2 = instance1.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    instance2.get('/posts/1').then((res) => {
      console.log('--- instance2.get ---');
      console.log(res.data);
    });
  } catch (error) {
    console.error('Axios demo error:', error);
  }
};
axiosInstanceCreate();
