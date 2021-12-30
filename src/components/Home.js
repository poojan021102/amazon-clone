import React from 'react'
import Header from './Header'
import "./Home.css"
function Home() {
    return (
        <>
        <Header/>
        <div className='home'>
            <img className='home__image' src="https://www.howtogeek.com/wp-content/uploads/2021/02/amazon-prime-video-logo-on-a-smartphone.jpeg?height=200p&trim=2,2,2,2" 
            alt="Amazone Prime Image" />
        </div>
        </>
    )
}

export default Home
