import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cart } from '../components/Cart';
import { removeFromCart, addItemQuantity, subtractItemQuantity } from '../store/cartSlice';
import CartIcon from '../images/cart.png';

export const CartList = () => {
    const { cartGoods, totalQuantity, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCartHandler = product => dispatch(removeFromCart(product));
    const addItemQuantityHandler = product => dispatch(addItemQuantity(product));
    const subtractItemQuantityHandler = product => dispatch(subtractItemQuantity(product));

    if (cartGoods.length < 1) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{ textAlign: 'center' }}>Cart is empty</h1>
                <img src={CartIcon} alt="cart"/>
            </div>
        )
    }
    return (
        <div className='cart-list'>
            <h2 style={{ textAlign: 'center' }}>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <td>название товара</td>
                        <td>цена ( за единицу)</td>
                        <td>количество</td>
                        <td>стоимость всего товара</td>
                        <td>Картинка товара</td>
                        <td>Увеличить/Уменьшить</td>
                        <td>Удалить товар из корзины</td>
                    </tr>
                </thead>
                <tbody>
                    {cartGoods.map(cartProduct => (
                        <Cart
                            key={cartProduct.articul}
                            cartProduct={cartProduct}
                            removeFromCart={removeFromCartHandler}
                            addItemQuantity={addItemQuantityHandler}
                            subtractItemQuantity={subtractItemQuantityHandler}
                        />
                    ))}
                </tbody>
            </table>
            {cartGoods.length >= 1 &&
                <div style={{ margin: '20px 0 0 20px' }}>
                    <p style={{ margin: 0, marginBottom: '15px', fontSize: '1.5em', fontWeight: 700 }}>Total quantity {totalQuantity}</p>
                    <p style={{ margin: 0, fontSize: '1.5em', fontWeight: 700 }}>Total amount {totalAmount.toFixed(2)}</p>
                </div>
            }
        </div>
    )
}
