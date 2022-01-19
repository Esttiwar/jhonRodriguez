import React, {useState} from 'react'
import "./Navbar.css"
import { Icon } from '@iconify/react';

const Navbar = () => {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

    return (
        <div className='diplay flex md:justify-around navbar-color py-5 w-screen'>
            <div className='mi-nombre'>
                <a name="navbar" />
                <h1 className='text-white px-2 font-bold text-3xl'>Jhon Rodríguez</h1>
            </div>
            <div onClick={() => {setMenuHamburguesa(!menuHamburguesa)}} className='burguer-menu'>
            <a name="navmenu" />
                <button className='burguer-menu-btn'>
                    {
                        menuHamburguesa 
                        ? <Icon icon="emojione-monotone:cross-mark" width="48" height="48" />
                        : <Icon icon="dashicons:menu-alt3" width="48" height="48" />
                    }
                </button>
                
            </div>
            <div>
            {menuHamburguesa && <div className='responsive-menu-hamburguesa'>
             <ul>
                <a href="#ancla-pr">
                    <li className='ml-3 mt-5 text-white text-2xl'>
                        Proyectos
                    </li>
                </a>
                <a href="#ancla-er">
                    <li className='ml-3 text-white text-2xl'>
                        Experiencia
                    </li>
                </a>
                <a href="#ancla-cr">
                    <li className='ml-3 text-white text-2xl'>
                        Contacto
                    </li>
                </a>
              </ul>
                </div>  
            }
            </div>
            <div className='diplay flex justify-center menu'>
                <button>
                    <a href="#ancla-p">
                        <h2 className='text-white mx-6 text-lg'>Proyectos</h2>
                    </a>
                </button>
                <button>
                    <a href="#ancla-e">
                        <h2 className='text-white mx-6 text-lg'>Experiencia</h2>
                    </a>
                </button>
                <button>
                    <a href="#ancla-c">
                        <h2 className='text-white mx-6 text-lg'>Contacto</h2>
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Navbar
