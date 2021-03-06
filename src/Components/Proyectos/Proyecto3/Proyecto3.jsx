import React from 'react'
import "./Proyecto3.css"
import { Icon } from '@iconify/react';

const Proyecto3 = () => {
    return (
        <div className='display flex fondo-proyecto3 bg-black'>
            <div className='w-1/2 img-proyecto3 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/25x94fZ4/rnmportafolio.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32 texto-p3'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Rick and Morty API
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
                        Pegada a API de Rick and Morty, muestra de personajes en tarjetas, utilización de paginación y buscador de personajes.
                    </p>
                    <div className='diplay flex'>
                    <span title="React">
                            <Icon icon="logos:react" width="48" height="48" inline={true} />
                        </span>
                        <span title="JavaScript">
                            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                        </span>
                        <span title="CSS">
                            <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        </span>
                        <span title="Tailwind">
                            <Icon icon="logos:tailwindcss-icon" width="48" height="48" />
                        </span>
                    </div>
                    <div className='botones display flex'>
                        <div>
                            <a target="_blank" href="https://esttiwar.github.io/rick-and-morty-api-react/">
                                <button className='rounded-lg ver-proyecto mr-8 text-black font-semibold p-4 bg-white my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>

                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Esttiwar/rick-and-morty-api-react">
                                <button className='rounded-lg ver-codigo text-white font-semibold border-solid border-2 border-white py-4 px-7 bg-black my-10 2xl:text-xl'>
                                    Ver código
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Proyecto3