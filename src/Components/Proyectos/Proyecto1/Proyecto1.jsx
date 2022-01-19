import React from 'react'
import "./Proyecto1.css"
import { Icon } from '@iconify/react';

const Proyecto1 = () => {
    return (
        <div className='display flex fondo-proyecto w-screen'>
            <a name="ancla-p" />
            <a name="ancla-pr" />
            <div className='w-1/2 img-proyecto1 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/FzGDLbkN/naciclo4portafolio.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32 texto-p1'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Proyectorio
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
                    Formé parte de este proyecto en el frontend, la aplicación fue construida para que los equipos de investigación realicen sus proyectos y lleven un control de sus actualizaciones. Usamos Toastify para notificar al usuario sobre sus acciones, y para la comunicación con el backend usamos GraphQL.

                    Utilizamos la metodologia ágil Scrum para organizar la forma en cómo trabajamos y llevamos el proyecto.
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
                        <span title="GraphQL">
                            <Icon icon="akar-icons:graphql-fill" color="#ff4081" width="48" height="48" />
                        </span>
                    </div>
                    <div className='botones display flex'>
                        <div>
                            <a target="_blank" href="https://proyectorio.herokuapp.com/">
                                <button className='rounded-lg ver-proyecto mr-8 font-semibold p-4 bg-gray-50 my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Equipo-Nova-Agil/Ciclo4">
                                <button className='rounded-lg ver-codigo text-white font-semibold border-solid border-2 border-white py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
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

export default Proyecto1
