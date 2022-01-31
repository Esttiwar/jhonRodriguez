import React from 'react'
import "./Proyecto2.css"
import { Icon } from '@iconify/react';

const Proyecto2 = () => {
    return (
        <div className='display fondo-proyecto2 flex bg-red-400'>
            <div className='w-1/2 display flex py-32 px-32 texto-p2'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Gestión de ventas (En equipo)
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                    Formé parte de este proyecto en el frontend, para la aplicación se construyó un sistema de seguimiento de ventas y productos de los usuarios. Utilizamos Toastify para notificar al usuario sobre sus acciones y conexión a una API backend creada por mi equipo para hacer una API REST-CRUD.

                    Utilizamos la metodologia SCRUM para organizar la forma en cómo trabajamos y llevamos el proyecto.
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
                            <a target="_blank" href="https://web-nova-agil.herokuapp.com/">
                                <button className='rounded-lg ver-proyecto mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Equipo-Nova-Agil/Front">
                                <button className='rounded-lg ver-codigo text-black font-semibold border-solid border-2 border-black py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
                                    Ver código
                                </button>
                            </a>
                        </div>                       
                    </div>
                </div>
            </div>
            <div className='w-1/2 img-proyecto2 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/tJ9BJvTB/naciclo3portafolio.png" alt="imagen proyecto" />
            </div>
            
        </div>
    )
}

export default Proyecto2
