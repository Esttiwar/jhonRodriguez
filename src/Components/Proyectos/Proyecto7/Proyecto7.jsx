import React from 'react'
import "./Proyecto7.css"
import { Icon } from '@iconify/react';

const Proyecto7 = () => {
    return (
        <div className='display fondo-proyecto7 flex bg-gray-700'>
            <div className='w-1/2 img-proyecto7 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/kXsY24XT/nivel-4.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32 texto-p7'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Snake Game
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
                        Juego Snake en Python junto con la librería Turtle Graphics, consiste atrapar la comida para avanzar de nivel pero sin chocarte con las paredes o tu propio cuerpo. El juego tiene 4 niveles y tiene sonido.
                    </p>
                    <div className='diplay flex'>
                        <span title='Python'>
                            <Icon icon="vscode-icons:file-type-python" width="48" height="48" inline={true} />
                        </span>
                        <span title='Turtle Graphics'>
                            <Icon icon="mdi:turtle" width="48" height="48" inline={true} />
                        </span>
                        
                    </div>
                    <div className='botones display flex'>
                        <div>
                            <a target="_blank" href="https://www.youtube.com/watch?v=KavMnA-627M">
                                <button className='rounded-lg ver-proyecto mr-8 text-black font-semibold p-4 bg-white my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Esttiwar/Snake-project">
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

export default Proyecto7