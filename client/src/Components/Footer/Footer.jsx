import React from 'react'
import logo from '../../Assets/png/token.png'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden text-white bg-black'>
      <div className='sm:mt-[2rem] sm:text-center xl:mt-[3rem] xl:ml-2 bg-black '>
        <input className='ml-2 pl-2 cursor-default bg-black border h-[2.4rem] ' type="email" placeholder='E-mail' />
        <button className='sm:mt-2 ml-2 text-lg font-bold hover:bg-blue-900 bg-blue-500 rounded-md h-[2.5rem] w-[5rem]'>Submit</button>
      </div>
      <div>
        <div className='sm:mt-[2rem] xl:mt-[2rem] flex justify-center bg-black'>
          <h1 className='bg-black cursor-pointer'>JOIN </h1>
        </div>
        <div className=' flex justify-center gap-5 bg-black'>
          <FaFacebook className='mt-2 bg-black hover:opacity-75 cursor-pointer size-[2rem]' />
          <FaSquareXTwitter className='mt-2 bg-black hover:opacity-75 cursor-pointer size-[2rem]' />
          <IoLogoWhatsapp className='mt-2 bg-black hover:opacity-75 cursor-pointer size-[2rem]' />
          <RiInstagramFill className='mt-2 bg-black hover:opacity-75 cursor-pointer size-[2rem]' />
        </div>
      </div>
      <hr className='mt-[3rem] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
      <div className='bg-black flex'>
        <img className='ml-5 bg-black' src={logo} alt="" />
        <h1 className='ml-3 bg-black text-xl cursor-pointer font-bold'>Tokify</h1>
      </div>
      <div className='bg-black'>
        <p className='sm:mt-[2rem] lg:mt-[1.5rem] ml-5 bg-black cursor-pointer max-w-[30rem]'>the use of non-fungible tokens (NFTs) to create a cooperative atmosphere for content creation, where NFT holders fund the project and contribute to the direction and narrative of the story</p>
      </div>
      <div className='sm:text-center sm:mt-[5rem] sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-5 lg:gap-[5rem] bg-black flex justify-center'>
        <div className='lg:mt-[-0rem] bg-black'>
          <h1 className='cursor-pointer bg-black'>Market Place</h1>
          <ul className='lg:mt-[1rem] bg-black'>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Art</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Gaming</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Membership</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Photography</li>
          </ul>
        </div>
        <div className=' lg:mt-[-0rem] bg-black'>
          <h1 className='cursor-pointer bg-black'>My Account</h1>
          <ul className='mt-[1rem] bg-black'>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Profile</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Watchlist</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Favorite</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Studio</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Settings</li>
          </ul>
        </div>
        <div className='sm:mt-[3rem] lg:mt-[-0rem] bg-black'>
          <h1 className='cursor-pointer bg-black'>Resources</h1>
          <ul className='mt-[1rem] bg-black'>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Blog</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Learn</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Help Center</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Community</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Taxes</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Developer Platform</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Platform Status</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Parners</li>
          </ul>
        </div>
        <div className='sm:mt-[3rem] lg:mt-[-0rem] bg-black'>
          <h1 className='cursor-pointer bg-black'>Company</h1>
          <ul className='mt-[1rem] bg-black'>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>About</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Carrer</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Ventures</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Privacy of Policy</li>
            <li className='mt-2 cursor-pointer hover:opacity-80 bg-black'>Terms & Service</li>
          </ul>
        </div>
      </div>
      <div className='mt-[2rem] bg-black flex justify-center'>
        <FaCopyright className='mt-1' />
        <p className='ml-2 bg-black cursor-pointer'>No Copyright</p>
      </div>
    </div>
  )
}

export default Footer