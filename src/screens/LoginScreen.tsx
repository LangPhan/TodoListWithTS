import React from 'react'
import { useBearStore } from '../Store'


const LoginScreen = () => {
    const bears = useBearStore
  return (
    <main className='mx-10 mt-[15%] px-10 py-10 bg-green-700 rounded-xl'>
        <h2 className='text-2xl font-bold text-white text-center'>Login</h2>
        <form className='my-10 flex flex-col'>
            <label 
            className='text-lg font-semibold text-white'
            htmlFor="name">Username:</label>
            <input 
            className='px-2 py-2 rounded-md focus:outline-none focus:text-green-600'
            type="text" id='name' placeholder='Enter your name' />
            <button 
            className='px-2 py-2 mt-4 ml-[25%] w-1/2 
            text-white bg-green-600 rounded-lg
            shadow-md hover:scale-110 hover:duration-500'
            type="submit">Login</button>
        </form>
    </main>
    )
}

export default LoginScreen