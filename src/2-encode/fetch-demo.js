import { API_URL } from '../constants.js';

export async function fetchWithoutEncode() {
  try {
    console.log('📢 [Fetch] encode feature - WithoutEncode:');
    const search = 'hello world!';
    const symbol = '&$';
    const res = await fetch(
      `${API_URL}/url-encoded?search=${search}&symbol=${symbol}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchManualEncode() {
  try {
    console.log('📢 [Fetch] encode feature - ManualEncode:');
    const search = 'hello world!';
    const symbol = '&$';
    const res = await fetch(
      `${API_URL}/url-encoded?search=${encodeURIComponent(
        search
      )}&symbol=${encodeURIComponent(symbol)}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
