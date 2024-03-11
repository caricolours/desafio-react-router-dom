import React from 'react'
import pastel from '../assets/pastel.png';

const Home = () => {
  return (
    <container className='tex-center mt-5'> 
        <h1 className='mb-3 mt-5'>Bienvenido a <span className='fw-bold'>Happy Cake</span></h1>
        <p className='mb-2'>El lugar de los Pasteles Felices</p>
        <img
            src={pastel}
            alt='pastel'
            className= 'img-fluid' width="250"
            /> 

        <h4 className='mt-5'>Imágen1: Vista <span className='fw-bold'>Home</span></h4>
        <h4>Fuente: Desafío Latam</h4>
    </container>
  )
}

export default Home
