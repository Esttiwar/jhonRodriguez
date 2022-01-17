import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='diplay flex md:justify-around navbar-color py-5 w-screen'>
            <div className=''>
                <h1 className='text-white px-2 font-bold text-2xl'>Jhon Rodríguez</h1>
            </div>
            <div className='diplay flex justify-center'>
                <button>
                    <h2 className='text-white mx-6 text-lg'>Proyectos</h2>
                </button>
                <button>
                    <h2 className='text-white mx-6 text-lg'>Experiencia</h2>
                </button>
                <button>
                    <h2 className='text-white mx-6 text-lg'>Contacto</h2>
                </button>
            </div>

        </div>
    )
}

export default Navbar
