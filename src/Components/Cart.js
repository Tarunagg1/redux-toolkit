import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../slices/cart.slice'
import Product from './Product'

export default function Cart() {
    const { cart } = useSelector(state => state.cart)
    console.log(cart);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="grid grid-cols-1 gap-2">
                {
                    cart && cart.map((item) =>{
                        return (
                            <div className="bg-eggwhite p-2 m-1">
                                <h3>{item.name}</h3>
                                <h3>{item.price}</h3>
                                <button className="p-2 w-full bg-waterloo border-2 px-2 text-grey-200 text-xl bg-hitpink-500" onClick={() => dispatch(removeCart(item))}>Add to cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}
