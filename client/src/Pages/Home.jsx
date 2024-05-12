import React from 'react'
import MainContent from '../Components/MainContent/MainContent'
import Product from '../Components/Product/Product'
import CounterPannel from '../Components/CounterPannel/CounterPannel'
import SecondContent from '../Components/SecondContent/SecondContent'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <MainContent />
            <Product />
            <CounterPannel />
            <SecondContent />
            <Footer />
        </div>
    )
}

export default Home