import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CounterPannel() {

    const [conter, setCounter] = useState(false);

    return (
        <div className='xl:mt-[3rem] text-white overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-2xl font-bold text-center'>SERVICE DATA</h1>
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <div className='mt-[2rem] grid grid-cols-4 text-center overflow-x-hidden justify-center'>
                    <div>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={200} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Users</p>
                    </div>
                    <div>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={10000} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Sold</p>
                    </div>
                    <div>
                        <h2 className='text-5xl font-extrabold'>
                            {
                                conter &&
                                <CountUp start={0} end={100} duration={2.81}></CountUp>
                            }
                        </h2>
                        <p className='text-xl font-semibold'>Products</p>
                    </div>
                    <div>
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