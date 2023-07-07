import React from 'react'

const CartList = ({products}) => {

    const cartList = products.filter(product => product.isInCart)

    return (
        <>
        <h2>Your Cart:</h2>
        <ul>
            {cartList.map(product => {
                return(
                    <li key={product.id}>
                        <h4>{product.scent}</h4>
                    </li>
                )
            })}
        </ul>
        </>
    )

};

export default CartList;
