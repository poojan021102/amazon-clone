import React from 'react'
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux"
function CheckoutProduct({ id,title,image,price,rating }) {
    const dispatch=useDispatch();
    const removeFromBasket=(e)=>{
        e.preventDefault();
        //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        });
    }
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} alt="item" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>&#9733;</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
