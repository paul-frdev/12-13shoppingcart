import React from 'react'

export const Goods = (props) => {
    const { product, handlerAddToCart } = props
    return (
        <div className='goods-block'>
            <img src={product.image} alt="img" />
            <p>{product.title}</p>
            <p>{product.cost}</p>
            <button
                onClick={() => handlerAddToCart(product)}
                className="add-to-cart"
            >Add to cart</button>
        </div>
    )
}
