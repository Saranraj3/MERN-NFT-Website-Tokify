import React from 'react';
import NFT from '../../Assets/png/What-is-NFT.png';
import NFTTOKEN from '../../Assets/png/Non-Fungible-Tokens.png';

function MainContent() {
    return (
        <div className='text-white'>
            <h1 className='mt-[4rem] text-2xl text-center'>What Is NFT </h1>
            <div>
                <p className='mt-[6rem] ml-[3rem] max-w-[39rem]'>A non-fungible token is a unique digital identifier that is recorded on a blockchain and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided. The ownership of an NFT is recorded in the blockchain and can be transferred by the owner, allowing NFTs to be sold and traded.</p>
                <div className='mt-[-10rem] mr-[2rem] justify-end flex'>
                    <img className='h-[15rem]' src={NFT} alt="" />
                </div>
            </div>
            <div className='flex justify-end'>
                <p className='mt-[5rem] mr-[3rem] max-w-[39rem]'> through a process called minting, in which the asset's information is encrypted and recorded on a blockchain. At a high level, the minting process entails a new block being created, NFT information being validated by a validator, and the block being closed. This minting process often entails incorporating smart contracts that assign ownership and manage NFT transfers.</p>
            </div>
            <div className='mt-[-10rem] ml-[2rem]'>
                <img className='h-[15rem]' src={NFTTOKEN} alt="" />
            </div>
        </div>
    )
}

export default MainContent