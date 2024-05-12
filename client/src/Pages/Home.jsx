import React from 'react'
import MainContent from '../Components/MainContent/MainContent'
import Product from '../Components/Product/Product'
import CounterPannel from '../Components/CounterPannel/CounterPannel'
import SecondContent from '../Components/SecondContent/SecondContent'

function Home() {
    return (
        <div>
            <MainContent />
            <Product />
            <CounterPannel />
            <SecondContent />
        </div>
    )
}

export default Home