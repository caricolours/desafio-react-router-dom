import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav class="bg-danger d-flex justify-content-between p-2">
                <div className='ps-3'>
                    <Link class='text-light me-4' to="/"> 🏠Home </Link>
                    <Link class='text-light' to="/contact"> 📩Contact</Link>
                </div>

                <div>
                    <a class="navbar-brand text-light" href="#">Happy Cake 🍰</a>
                </div>
            </nav>

        </>
    )
}

export default Navigation