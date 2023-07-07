import React from 'react'

const Product = ({product, scent, price, burnTime, onAddToCart}) => {

    const handleClick = () => {
        onAddToCart(product.id)
    }




    return (
    <>
    <h4>{scent}</h4>   
    <p>£{price}</p>
    <p>Burns for {burnTime} hours</p> 
    <button type='submit' onClick={handleClick}>Add to Cart</button>
    </>
    )
};

export default Product;
