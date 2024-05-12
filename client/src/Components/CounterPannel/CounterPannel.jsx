import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CounterPannel() {

    const [conter, setCounter] = useState(false);

    return (
        <div className='sm:mt-[3rem] md:mt-[5rem] xl:mt-[3rem] text-white overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-2xl font-bold text-center'>SERVICE DATA</h1>
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <div className='sm:mt-[2rem] sm:grid-cols-1 md:grid-cols-4 md:mt-[1rem] md:m-5 xl:mt-[2rem] grid text-center overflow-x-hidden justify-center'>
                    <div className='sm:mt-[2rem]'>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={200} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Users</p>
                    </div>
                    <div className='sm:mt-[2rem]'>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={10000} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Sold</p>
                    </div>
                    <div className='sm:mt-[2rem]'>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={100} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Products</p>
                    </div>
                    <div className='sm:mt-[2rem]'>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={100000} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Balance</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}

export default CounterPannel