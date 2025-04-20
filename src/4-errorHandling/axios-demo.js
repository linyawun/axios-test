import axios from 'axios';
import { API_URL } from '../constants.js';

// Test successful response (200)
export async function axiosSuccessResponse() {
  try {
    console.log('📢 [Axios] Error Handling - 200 Success Response:');
    const response = await axios.get(`${API_URL}/success`);
    console.log('Success:', response.data);
  } catch (error) {
    handleError(error);
  }
}

// Test not found error (404)
export async function axiosNotFoundError() {
  try {
    console.log('📢 [Axios] Error Handling - 404 Not Found Error:');
    await axios.get(`${API_URL}/not-found`);
  } catch (error) {
    handleError(error);
  }
}

// Test server error (500)
export async function axiosServerError() {
  try {
    console.log('📢 [Axios] Error Handling - 500 Server Error:');
    await axios.get(`${API_URL}/error`);
  } catch (error) {
    handleError(error);
  }
}

// Error handler function
function handleError(error) {
  if (error.response) {
    // Server responded with non-2xx status
    console.error(
      'Error:',
      `${error.response.status} - ${error.response.data.message}`
    );
  } else if (error.request) {
    // Request was made but no response received
    console.error('Error: No response received');
  } else {
    // Something happened in setting up the request
    console.error('Error:', error.message);
  }
}
