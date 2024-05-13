import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../Common/index';

function Login() {


    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const HandleOnChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            };
        });
    };

    const HandleOnSubmit = async (e) => {
        e.preventDefault()
        const dataresponse = await fetch(API.Login.url, {
            method: API.Login.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataAPI = await dataresponse.json()
        if (dataAPI.success) {
            toast.success(dataAPI.message)
            navigate('/')
        }
        if (dataAPI.error) {
            toast.error(dataAPI.message)
        }
    }

    return (
        <div className='text-white'>
            <h1 className='mt-[5rem] text-center cursor-pointer text-2xl'>Login</h1>
            <div className='mt-[2rem] text-white flex justify-center'>
                <form onSubmit={HandleOnSubmit}>
                    <div>
                        <input className='pl-2 h-[2.5rem] w-[18rem] cursor-default border' type="password" placeholder='Password' name='password' value={data.password} onChange={HandleOnChange} />
                    </div>
                    <div className='mt-4'>
                        <input className='pl-2 h-[2.5rem] w-[18rem] cursor-default border' type="email" placeholder='Email' name='email' value={data.email} onChange={HandleOnChange} />
                    </div>
                    <button className='mt-4 h-[2.5rem] w-[18rem] text-lg cursor-pointer hover:bg-green-600 bg-green-500'>Submit</button>
                    <p className='mt-3 cursor-pointer'>You Don't Haven Account Then <Link to='/signup' className='text-red-500 cursor-pointer'>Signup</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login