import React from 'react'
import "./Proyecto2.css"
import { Icon } from '@iconify/react';

const Proyecto2 = () => {
    return (
        <div className='display flex bg-red-400 w-screen'>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Gestión de ventas
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                    Formé parte de este proyecto en el frontend, para la aplicación se construyó un sistema de seguimiento de ventas y productos de los usuarios. Utilizamos Toastify para notificar al usuario sobre sus acciones y conexión a una API backend creada por mi equipo para hacer una API REST-CRUD.

                    Utilizamos la metodologia ágil Scrum para organizar la forma en cómo trabajamos y llevamos el proyecto.
                    </p>
                    <div className='diplay flex'>
                        <span>
                            <Icon icon="logos:react" width="48" height="48" inline={true} />
                        </span>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        </span>
                        <span>
                            <Icon icon="logos:tailwindcss-icon" width="48" height="48" />
                        </span>
                    </div>
                    <div>
                        <button className='rounded-lg mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                            Ver proyecto
                        </button>
                        <button className='rounded-lg text-black font-semibold border-solid border-2 border-black py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
                            Ver código
                        </button>
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
