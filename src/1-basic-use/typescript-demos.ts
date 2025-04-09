import axios, { AxiosInstance } from 'axios'

// This demo shows why instance.create() is problematic in TypeScript
export async function axiosTypeScriptDemo() {
  console.log('📢 [axios] TypeScript Instance Creation Demo:')
  console.log('\n1. Creating first instance (This works fine in TypeScript):')
  
  try {
    // This is fine in TypeScript
    const instance1: AxiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
    console.log('✅ instance1 created successfully')

    console.log('\n2. TypeScript Compilation Error: (run `npx tsc` to see the error)')
    const instance2: AxiosInstance = instance1.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
    console.log('When trying to compile this code:')
    console.log(`
    const instance2: AxiosInstance = instance1.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'X-Custom-Header': 'foobar' },
    })`)
    
    console.log('\nTypeScript shows this error:')
    console.log('src/1-basic-use/typescript-demos.ts:18:48 - error TS2339: Property \'create\' does not exist on type \'AxiosInstance\'.')
      
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
} 