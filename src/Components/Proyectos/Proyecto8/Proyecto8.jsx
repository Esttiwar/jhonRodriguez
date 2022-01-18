import React from 'react'
import "./Proyecto8.css"
import { Icon } from '@iconify/react';

const Proyecto8 = () => {
    return (
        <div className='display flex bg-purple-600 w-screen'>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Validador de Email
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        La página tiene en su lógica una expresión regular que te indica si un correo está bien escrito en sus requisitos.
                    </p>
                    <div className='diplay flex'>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        </span>
                        <span>
                            <Icon icon="vscode-icons:file-type-sass" width="48" height="48" inline={true} />
                        </span>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                        </span>
                    </div>
                    <div>
                        <a target="_blank" href="https://esttiwar.github.io/landing-email-validator/">
                            <button className='rounded-lg mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                                Ver proyecto
                            </button>
                        </a>
                        <a target="_blank" href="https://github.com/Esttiwar/landing-email-validator">
                            <button className='rounded-lg text-black font-semibold border-solid border-2 border-black py-4 px-7 my-10 2xl:text-xl'>
                                Ver código
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-1/2 img-proyecto8 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/gcKnrPp4/Captura-de-pantalla-2021-08-08-18-43-50.png" alt="imagen proyecto" />
            </div>
        </div>
    )
}

export default Proyecto8