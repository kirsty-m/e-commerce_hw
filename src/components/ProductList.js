import React from 'react'
import Product from './Product'


const ProductList = ({products}) => {

    const productNodes = products.map (product => {
        return(
            <Product key={product.id} stock={product.stock} scent={product.scent} burnTime={product.burnTime} price={product.price}/>
        );
    });

    return (
    <>
    {productNodes}
    </>
    )
};

export default ProductList;
