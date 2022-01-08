import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProduct } from '../slices/product.slice';
import Navbar from './Navbar';
import Product from './Product';

export default function Dashboard() {
    useEffect(() => {
        dispatch(fetchAsyncProduct());
    }, [])

    const { list } = useSelector(state => state.products);
    const dispatch = useDispatch();


    return (
        <Fragment>
                <div className="grid grid-cols-4 gap-4">
                    {
                        list && list.map((item, index) => {
                            return (
                                <Product product={item} key={index} />
                            )
                        })
                    }
                </div>
        </Fragment>
    )
}
