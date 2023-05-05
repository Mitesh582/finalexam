import React from 'react'
import { Cart2 } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {

    const { CartItems } = useSelector(state => state.productReducer)
    console.log(CartItems);

    return (
        <>
            <header className='bg-dark'>
                <div className='container'>
                    <div className='row align-item-center p-3'>
                        <div className='logo col-2 text-white'>
                            <h2 className='m-0'>
                                Header
                            </h2>
                        </div>
                        <nav className='col'>
                            <ul className='list-unstyled d-flex justify-content-end m-0'>
                                <li className='p-2'>
                                    <NavLink to='/' className='text-decoration-none text-white mx-4'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/about' className='text-decoration-none text-white mx-4'>
                                        About
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/product' className='text-decoration-none text-white mx-4'>
                                        Product
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className='cta col-2 mx-4' >
                            <NavLink to='/cart'>
                                <button type="button" class="btn btn-primary position-relative">
                                    <Cart2 className='fs-4' />
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {
                                            CartItems.length
                                        }
                                    </span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header