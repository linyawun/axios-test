import axios from 'axios';
import { API_URL } from '../constants.js';

export async function axiosParamsInUrl() {
  try {
    console.log('📢 [Axios] encode feature - ParamsInUrl:');
    const search = 'hello world!';
    const symbol = '&$';
    const response = await axios.get(
      `${API_URL}/url-encoded?search=${search}&symbol=${symbol}`
    );
    console.log(response.data);
  } catch (error) {
    console.error('axiosParamsInUrl error:', error);
  }
}

export async function axiosAutoEncodeParams() {
  try {
    console.log('📢 [Axios] encode feature - AutoEncodeParams:');
    const search = 'hello world!';
    const symbol = '&$';
    const response = await axios.get(`${API_URL}/url-encoded`, {
      params: { search, symbol },
    });
    console.log(response.data);
  } catch (error) {
    console.error('axiosAutoEncodeParams error:', error);
  }
}
