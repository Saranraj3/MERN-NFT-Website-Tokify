import React, { useState } from 'react'
import logo from '../../Assets/png/token.png'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {

    const [nav, setNav] = useState(true);
    const HandleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='text-white sticky top-0 z-10 overflow-x-hidden'>
            <img className='mt-3 ml-5 cursor-pointer' src={logo} alt="" />
            <div>
                <div onClick={HandleNav} className='mt-[-2rem] mr-[1rem] flex justify-end'>
                    {!nav ? <IoMdClose className='sm:visible lg:invisible size-[2rem] ' /> : <IoMenu className='sm:visible lg:invisible size-[2rem] ' />}
                </div>
                <div className={!nav ? 'text-white fixed sm:left-0 sm:top-0 sm:w-[60%] sm:h-[15rem] sm:border-r border-r-gray-800 ease-in-out duration-200 sm:visible lg:invisible' : 'fixed left-[-100%]'}>
                    <ul className='sm:visible sm:mt-[1rem] sm:ml-[1rem] sm:text-lg lg:invisible font-bold '>
                        <li className='sm:mt-[1rem] hover:text-gray-500 cursor-pointer'>Contact</li>
                        <li className='sm:mt-[1rem] hover:text-gray-500 cursor-pointer'>Services</li>
                        <button className='sm:mt-[1rem] sm:ml-[-0.5rem] bg-blue-500 cursor-pointer hover:bg-blue-900 h-[2rem] w-[5rem] rounded-md '>Login</button>
                    </ul>
                </div>
                <ul className='sm:invisible lg:visible mt-[-1.5rem] mr-[3rem] font-bold flex justify-end gap-[3rem] '>
                    <li className='hover:text-gray-500 cursor-pointer'>Contact</li>
                    <li className='hover:text-gray-500 cursor-pointer'>Services</li>
                    <Link to='/login'><button className='bg-blue-500 cursor-pointer hover:bg-blue-900 h-[2rem] w-[5rem] rounded-md '>Login</button></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar