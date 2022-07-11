import React from 'react'

export const Cart = (props) => {
    const { cartProduct, removeFromCart, addItemQuantity, subtractItemQuantity } = props;
    return (
        <tr className='cart'>
            <td>{cartProduct.title}</td>
            <td>{cartProduct.cost}</td>
            <td>{cartProduct.quantity}</td>
            <td>{cartProduct.price}</td>
            <td>
                <img src={cartProduct.image} style={{ width: '50px', height: '50px' }} alt="img" />
            </td>
            <td>
                <button
                    style={{ marginRight: '1.1em' }}
                    onClick={() => subtractItemQuantity(cartProduct)}
                >-</button>
                <button
                    onClick={() => addItemQuantity(cartProduct)}
                >+</button>
            </td>
            <td>
                <button
                    onClick={() => removeFromCart(cartProduct)}
                >X</button>
            </td>
        </tr>
    )
}
