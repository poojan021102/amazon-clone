import React from 'react'
import Header from './Header'
import { useSelector } from "react-redux"
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const basket = useSelector((state) => state);
    return (
        <>
            <Header />
            <div className='checkout'>

                    <img className='checkout__ad' src="https://m.media-amazon.com/images/G/31/img22/Jan/Newyear/Newyear_1500x300.jpg"
                        alt="Special Offer" />
                    {
                        basket.basket.length == 0 ? (
                            <div>
                                <h2>Your Shopping Basket is empty</h2>
                                <p>
                                    You have no item in your basket. To buy one or more item click "Add to basket" next to the item.
                                </p>
                            </div>

                        ) : (
                            <div>
                                <h2 className='checkout__title'>Your Shopping Basket</h2>
                                {/* all of the checkout product */}
                                {
                                    basket.basket.map(item => (
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
            </div>
        </>
    )
}

export default Checkout
