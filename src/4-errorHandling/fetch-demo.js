// Fetch Demo - Manual Error Handling
const BASE_URL = 'http://localhost:3006/api'

async function testEndpoint(endpoint) {
  try {
    console.log(`\nTesting endpoint: ${endpoint}`)
    const response = await fetch(`${BASE_URL}${endpoint}`)

    // Fetch doesn't automatically throw errors for non-200 responses
    // We need to check response.ok manually
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`${response.status} - ${errorData.message}`)
    }

    const data = await response.json()
    console.log('Success:', data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Run tests
async function runFetchDemo() {
  console.log('=== Fetch Demo - Manual Error Handling ===')

  // Test 200 - Success
  await testEndpoint('/success')

  // Test 404 - Not Found
  await testEndpoint('/not-found')

  // Test 500 - Server Error
  await testEndpoint('/error')
}

runFetchDemo()
