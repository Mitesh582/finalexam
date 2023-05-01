import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAsync } from '../../Services/Action/productAction'

function Product() {

    const { Products } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    const get = () => {
        dispatch(getProductsAsync())
    }

    useEffect(() => {
        dispatch(getProductsAsync())
        get();
    }, [])

    return (
        <>
            <section>
                <h1 className='text-center my-5'>Products</h1>
                <div className="container">
                    <div className="row">
                        {
                            Products.map((p) => {
                                return (
                                    <>
                                        <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4">
                                            <div className="card ">
                                                <img className="card-img" src={p.img} alt="" />
                                                <div className="card-img-overlay d-flex justify-content-end">
                                                    <a href="#" className="card-link text-danger like">
                                                        <i className="fas fa-heart" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{p.title}</h4>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div className="price text-success">
                                                            <h5 className="">
                                                                <span>Price : </span>
                                                                {p.price}&#8377;
                                                            </h5>
                                                        </div>
                                                        <h6 className="card-subtitle mb-2 text-muted d-flex">{p.date}</h6>
                                                    </div>
                                                    <p className="card-text">{p.details}</p>
                                                    <div className='btn-main d-flex justify-content-between'>
                                                        <div className='buy-bt'><a href="" className='text-decoration-none btn btn-primary mt-2'>buy now</a></div>
                                                        <div className='seemore-bt'><a href="" className='text-decoration-none text-dark btn btn-info mt-2'>see more</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product