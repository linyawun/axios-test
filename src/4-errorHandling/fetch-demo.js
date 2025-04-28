import { API_URL } from '../constants.js'

// Test successful response (200)
export async function fetchSuccessResponse() {
  try {
    console.log('📢 [Fetch] Error Handling - 200 Success Response:')
    const response = await fetch(`${API_URL}/success`)

    // Fetch doesn't automatically throw errors for non-200 responses
    // We need to check response.ok manually
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`${response.status} - ${errorData.message}`)
    }

    const data = await response.json()
    console.log('Success:', data)
  } catch (error) {
    console.log('Error:', error.message)
  }
}

// Test not found error (404)
export async function fetchNotFoundError() {
  try {
    console.log('📢 [Fetch] Error Handling - 404 Not Found Error:')
    const response = await fetch(`${API_URL}/not-found`)

    // // Fetch doesn't automatically throw errors for non-200 responses
    // // We need to check response.ok manually
    // if (!response.ok) {
    //   const errorData = await response.json()
    //   throw new Error(`${response.status} - ${errorData.message}`)
    // }

    const data = await response.json()
    console.log('Success:', data)
  } catch (error) {
    console.log('Error:', error.message)
  }
}

// Test server error (500)
export async function fetchServerError() {
  try {
    console.log('📢 [Fetch] Error Handling - 500 Server Error:')
    const response = await fetch(`${API_URL}/error`)

    // Fetch doesn't automatically throw errors for non-200 responses
    // We need to check response.ok manually
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`${response.status} - ${errorData.message}`)
    }

    const data = await response.json()
    console.log('Success:', data)
  } catch (error) {
    console.log('Error:', error.message)
  }
}

// Error handler function
function handleError(error) {
  if (error.message) {
    console.error('Error:', error.message)
  }
}
