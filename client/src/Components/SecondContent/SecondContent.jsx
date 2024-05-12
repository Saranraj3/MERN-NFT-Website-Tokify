import React from 'react'
import createnft from '../../Assets/png/NFT-Create-Tokify.png';

function SecondContent() {
    return (
        <div className='mt-[3rem] text-white'>
            <h1 className='text-2xl font-bold text-center'>NFT GUIDE</h1>
            <div className='mt-[3rem]'>
                <div className='m-5 flex justify-center'>
                    <img src={createnft} alt="" />
                </div>
                <p className='text-lg text-center m-5'>So, how do I create an NFT? To create an NFT and sell it online, you first need a suitable digital media file and a crypto wallet linked to a compatible blockchain. Then you can pick a suitable marketplace, upload your file to “mint” your NFT, and list it for sale.Popular NFTs are 2D images, 3D images, GIFs, audio, and video. Creating NFTs with static 2D images is easier for NFT beginners. For advanced users, you can create 3D NFTs with programs like Maya, Bender, or Houdini. If you know how to program well, you can even create virtual real estate on a piece of digital land in the</p>
            </div>
        </div>
    )
}

export default SecondContent