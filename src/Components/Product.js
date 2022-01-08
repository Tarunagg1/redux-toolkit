import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cart.slice';

export default function Product({ product }) {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="justify-center max-auto flex flex-col items-center rounded border-2 border-indigo-200 text-xl border-2 border-gray-300 rounded p-2 bg-gray-100">
                <img src={product.imgUrl} alt="" className="w-48" />
                <span>{product.price}</span>
                <span>{product.name}</span>
                <button className="p-2 w-full bg-waterloo border-2 px-2 text-grey-200 text-xl bg-hitpink-500" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
            </div>
        </Fragment>
    )
}
