import React from 'react'
import MainContent from '../Components/MainContent/MainContent'
import Product from '../Components/Product/Product'
import CounterPannel from '../Components/CounterPannel/CounterPannel'

function Home() {
    return (
        <div>
            <MainContent />
            <Product />
            <CounterPannel />
        </div>
    )
}

export default Home