import React from 'react';
import NFT from '../../Assets/png/What-is-NFT.png';
import NFTTOKEN from '../../Assets/png/Non-Fungible-Tokens.png';

function MainContent() {
    return (
        <div className='text-white'>
            <h1 className='sm:mt-[2rem] md:mt-[4rem] text-2xl text-center'>What Is NFT </h1>
            <div>
                <p className='sm:m-5 sm:mt-[1rem] sm:max-w-[39rem] md:mt-[5rem] md:max-w-[25rem] lg:max-w-[37rem] xl:ml-[5rem]'>A non-fungible token is a unique digital identifier that is recorded on a blockchain and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided. The ownership of an NFT is recorded in the blockchain and can be transferred by the owner, allowing NFTs to be sold and traded.</p>
                <div className='sm:ml-[0.9rem] md:mt-[-13rem] md:mr-[1rem] lg:mt-[-11rem] lg:mr-[-0.5rem] xl:mr-[2rem] justify-end flex'>
                    <img className='sm:h-[13rem] md:h-[12rem] lg:h-[14rem] xl:h-[15rem]' src={NFT} alt="" />
                </div>
            </div>
            <div className='flex justify-end'>
                <p className='sm:m-5 sm:mt-[1rem] sm:max-w-[39rem] md:mt-[8rem] md:mr-[3rem] md:max-w-[25rem] lg:max-w-[37rem] xl:mr-[5rem] '> through a process called minting, in which the asset's information is encrypted and recorded on a blockchain. At a high level, the minting process entails a new block being created, NFT information being validated by a validator, and the block being closed. This minting process often entails incorporating smart contracts that assign ownership and manage NFT transfers.</p>
            </div>
            <div className='sm:ml-[0.9rem] md:mt-[-12rem] md:ml-[1rem] xl:ml-[2rem]'>
                <img className='sm:h-[13rem] md:h-[12rem] lg:ml-[-0.5rem] lg:h-[14rem] xl:h-[15rem] ' src={NFTTOKEN} alt="" />
            </div>
        </div>
    )
}

export default MainContent