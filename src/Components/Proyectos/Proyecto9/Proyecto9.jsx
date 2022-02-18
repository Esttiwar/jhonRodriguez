import React from 'react'
import "./Proyecto9.css"
import { Icon } from '@iconify/react';

const Proyecto9 = () => {
    return (
        <div className='display fondo-proyecto9 flex bg-blue-400'>
            <div className='w-1/2 display flex py-32 px-32 texto-p9'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Studio Ghibli API con login sencillo
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        Por medio de la API de Studio Ghibli muestro las películas realizadas con todos los detalles de cada una. Adicional a eso usé un sencillo login/logout utilizando use un contexto.
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
                            <a target="_blank" href="https://esttiwar.github.io/ghibli-films/">
                                <button className='rounded-lg ver-proyecto mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Esttiwar/ghibli-films">
                                <button className='rounded-lg ver-codigo text-black font-semibold border-solid border-2 border-black py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
                                    Ver código
                                </button>
                            </a>
                        </div>                       
                    </div>
                </div>
            </div>
            <div className='w-1/2 img-proyecto9 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/5yx1qj0B/sgportfolio.png" alt="imagen proyecto" />
            </div>
            
        </div>
    )
}

export default Proyecto9