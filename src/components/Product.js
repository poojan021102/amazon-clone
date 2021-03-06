import React from 'react'
import "./Product.css"
import { useDispatch } from "react-redux"
function Product({ id, title, image, price, rating }) {
    const dispatch=useDispatch();
    const addToBasket=(e)=>{
        e.preventDefault();
        //add item to basket
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>&#9733;</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
