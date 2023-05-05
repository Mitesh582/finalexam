import React from 'react'
import { useSelector } from 'react-redux'
import "./SeeMore.css"
import { useEffect } from 'react'

function SeeMore() {

    const { Product } = useSelector(state => state.productReducer)

    useEffect(() => {
    }, [])

    return (
        <>
            <section>
                <div className="wrapper">
                    <div className="product-img">
                        <img src={Product.img} height={420} width={327} />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <h1>{Product.title}</h1>
                            <h2>by me and friends</h2>
                            <p>{Product.details}</p>
                        </div>
                        <div className="options d-flex flex-fill">
                            <select className="custom-select ">
                                <option selected>Color</option>
                                <option value={1}>Green</option>
                                <option value={2}>Blue</option>
                                <option value={3}>Red</option>
                            </select>
                            <select className="custom-select ">
                                <option selected>Standard</option>
                                <option value={1}>A1</option>
                                <option value={2}>A2</option>
                                <option value={3}>A3</option>
                            </select>
                        </div>
                        <div className="product-price-btn">
                            <p><span className='money'>{Product.price}</span>&#8377;</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SeeMore