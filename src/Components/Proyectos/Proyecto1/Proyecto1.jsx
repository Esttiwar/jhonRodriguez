import React from 'react'
import "./Proyecto1.css"
import { Icon } from '@iconify/react';

const Proyecto1 = () => {
    return (
        <div className='display flex fondo-proyecto w-screen'>
            <a name="ancla-p" />
            <div className='w-1/2 img-proyecto1 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/FzGDLbkN/naciclo4portafolio.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Proyectorio
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
                    Formé parte de este proyecto en el frontend, la aplicación fue construida para que los equipos de investigación realicen sus proyectos y lleven un control de sus actualizaciones. Usamos Toastify para notificar al usuario sobre sus acciones, y para la comunicación con el backend usamos GraphQL.

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
                        <span>
                            <Icon icon="akar-icons:graphql-fill" color="#ff4081" width="48" height="48" />
                        </span>
                    </div>
                    <div>
                        <button className='rounded-lg mr-8 font-semibold p-4 bg-gray-50 my-10 2xl:text-xl'>
                            Ver proyecto
                        </button>
                        <button className='rounded-lg text-white font-semibold border-solid border-2 border-white py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
                            Ver código
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Proyecto1
