import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='text-white'>
            <h1 className='mt-[5rem] text-center cursor-pointer text-2xl'>Login</h1>
            <div className='mt-[2rem] text-white flex justify-center'>
                <div>
                    <div>
                        <input className='pl-2 h-[2.5rem] w-[18rem] cursor-default border' type="text" placeholder='Name' name='name' />
                    </div>
                    <div className='mt-4'>
                        <input className='pl-2 h-[2.5rem] w-[18rem] cursor-default border' type="email" placeholder='Email' name='email' />
                    </div>
                    <button className='mt-4 h-[2.5rem] w-[18rem] text-lg cursor-pointer hover:bg-green-600 bg-green-500'>Submit</button>
                    <p className='mt-3 cursor-pointer'>You Don't Haven Account Then <Link to='/signup' className='text-red-500 cursor-pointer'>Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login