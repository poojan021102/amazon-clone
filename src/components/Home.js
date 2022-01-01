import React from 'react'
import Header from './Header'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <img className='home__image' src="https://www.howtogeek.com/wp-content/uploads/2021/02/amazon-prime-video-logo-on-a-smartphone.jpeg?height=200p&trim=2,2,2,2"
                    alt="Amazone Prime Image" />
                {/* Products */}
                <div className="home__row">
                    <Product
                        id="1"
                        title="The Lean Startup"
                        price={11.96}
                        rating={5}
                        image="https://th.bing.com/th/id/OIP.negu8toIAIp0qjr77J88-QHaLM?w=118&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                    />
                    <Product
                        id="2"
                        title="Apple iPhone 13 Mini - Blue"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="Mixer"
                        price={11.96}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51a02ZDkk6S._SL1000_.jpg"
                    />
                    <Product
                        id="4"
                        title="Think and Grow Rich"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SX319_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="5"
                        title="Echo Dot"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title="Sony Bravia 80 cm (32 inches) HD Ready Smart LED TV 32W6103 (Black)"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/915X01--m2S._SL1500_.jpg"
                    />
                </div>
                {/* id, name,title,price,ratings,image */}
            </div>
        </>
    )
}

export default Home
