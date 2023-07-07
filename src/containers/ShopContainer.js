import React, { useState } from 'react'
import ProductList from '../components/ProductList';
import CartList from '../components/CartList';
import Product from '../components/Product';

const ShopContainer = () => {

const [products, setProducts] = useState(
    [
        {
            id: 1,
            scent: "Vanilla",
            price: 10,
            burnTime: 12,
            stock: 20
        },

        {
            id: 2,
            scent: "Rose",
            price: 15,
            burnTime: 20,
            stock: 10
        },
        {
            id: 3,
            scent: "Citrus",
            price: 15,
            burnTime: 20,
            stock: 12
        },
        {
            id: 4,
            scent: "Sandlewood",
            price: 12,
            burnTime: 10,
            stock: 30,
        },
        {
            id: 5,
            scent: "Lavendar",
            price: 15,
            burnTime: 20,
            stock: 15 
        }
    ]
) 
const [selectedProductId, setSelectedProductId] = useState('');
// const [product, setProduct]


    const handleAddToCart = (id) => {
        const selectedProducts = products.map((product) => {
            return product.id === id
            ? {...product, isInCart: !product.isInCart}
            : product
        })
        setProducts(selectedProducts)
        
    };

    const handleProductSelected = id => {
        setSelectedProductId(id)
    }

    const selectedProduct = products.find(product.id === selectedProductId)


    return (
    <div>
        <h1>Candle Shop</h1>
        <ProductList products={products} onProductSelected={handleProductSelected}/>
        <Product product={product} onAddToCart={handleAddToCart}/>
        <CartList products={products}/>
    </div>
    )
};

export default ShopContainer;
