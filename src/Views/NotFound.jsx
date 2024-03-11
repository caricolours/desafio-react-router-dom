import React from 'react'
import error from '../assets/error404quees.jpg';

const NotFound = () => {
  return (
    <div className='container mt-5'>
        <div  className= 'row'>
            <div className= 'col-12 text-center'> 
            <img
            src={error}
            alt='404'
            className= 'img-fluid'
            /> 
            </div>
        </div>
    </div>
  )
}

export default NotFound