import React from 'react'
import logo from '../../Assets/png/token.png'


function Navbar() {
  return (
    <div className='text-white'>
        <img className='mt-3 ml-5 cursor-pointer' src={logo} alt="" />
        <div>
            <ul className='mt-[-1.5rem] mr-[3rem] font-bold flex justify-end gap-[3rem] '>
                <li className='hover:text-gray-500 cursor-pointer'>Contact</li>
                <li className='hover:text-gray-500 cursor-pointer'>Services</li>
                <li className='hover:text-gray-500 cursor-pointer'>About</li>
                <button className='bg-blue-500 cursor-pointer hover:bg-blue-900 h-[2rem] w-[5rem] rounded-md '>Login</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar