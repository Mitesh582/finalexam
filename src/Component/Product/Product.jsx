import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCartAsync, getProductAsync, getProductsAsync } from '../../Services/Action/productAction'
import { NavLink, useNavigate } from 'react-router-dom'

function Product() {

    const { Products, isEdit } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCart = (id) => {
        dispatch(AddToCartAsync(id))
    }

    const SeeMore = (id) => {
        dispatch(getProductAsync(id))
    }

    const get = () => {
        dispatch(getProductsAsync())
    }

    useEffect(() => {
        // dispatch(getProductsAsync())
        get();
    }, [])

    if (isEdit) {
        navigate('/seemore')
    } else {
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
                                                    <div className=" d-flex justify-content-end">
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
                                                            <div className='buy-bt'>
                                                                <button className='text-decoration-none btn btn-primary mt-2' onClick={() => addToCart(p.id)}>
                                                                    Buy Now
                                                                </button>
                                                            </div>
                                                            <div className='seemore-bt'>
                                                                <button className='text-decoration-none text-dark btn btn-info mt-2' onClick={() => SeeMore(p.id)}>
                                                                    See More
                                                                </button>
                                                            </div>
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
}
export default Product