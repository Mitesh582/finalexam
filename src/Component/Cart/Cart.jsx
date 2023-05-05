import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

  const { CartItems } = useSelector(state => state.productReducer)

  return (
    <section>
      {
        CartItems.map((ca) => {
          return (
            <>
              <div className="container pt-5">
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img src={ca.img} className="w-100" />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div className="mask"/>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5>{ca.title}</h5>
                            <div className="d-flex flex-row">
                              <div className="text-danger mb-1 me-2">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              {ca.details}
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">&#8377;{ca.price}</h4>
                              <span className="text-danger"><s>&#8377;25%</s></span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button className="btn btn-primary btn-sm" type="button">Details</button>
                              <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </section>

  )
}

export default Cart