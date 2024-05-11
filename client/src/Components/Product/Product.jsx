import React from 'react'
import ProductCategory from './ProductList'

function Product() {
    return (
        <div className='text-white'>
            <h1 className='mt-[5rem] text-2xl font-bold text-center'>DO YOU WANT BUY NFT</h1>
            <div className='grid grid-cols-10 gap-2 m-5 mt-[3rem]'>
                {ProductCategory.map((item,index) => (
                    <div key={index}>
                        <img className='mt-[0.5rem] rounded-lg' src={item.image} alt="" />
                        <div className='flex justify-center'>
                        <button className='bg-red-500 h-[2rem] w-[9rem] '>BUY</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product