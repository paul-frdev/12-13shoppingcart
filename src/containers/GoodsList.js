import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Goods } from '../components/Goods';
import { addToCart } from '../store/cartSlice';

export const GoodsList = () => {
    const { goods } = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const handlerAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='goods-field'>
            {goods && goods.map(product => (
                <Goods key={product.articul} product={product} handlerAddToCart={handlerAddToCart} />
            ))}
        </div>
    )
}
