import React from 'react'
import "./Proyecto7.css"
import { Icon } from '@iconify/react';

const Proyecto7 = () => {
    return (
        <div className='display flex bg-gray-700 w-screen'>
            <div className='w-1/2 img-proyecto7 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/kXsY24XT/nivel-4.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Snake Game
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
                        Juego Snake en Python junto con la librería Turtle Graphics, consiste atrapar la comida para avanzar de nivel pero sin chocarte con las paredes o tu propio cuerpo. El juego tiene 4 niveles y tiene sonido.
                    </p>
                    <div className='diplay flex'>
                        <span>
                            <Icon icon="vscode-icons:file-type-python" width="48" height="48" inline={true} />
                        </span>
                        <span>
                            <Icon icon="mdi:turtle" width="48" height="48" inline={true} />
                        </span>
                        
                    </div>
                    <div>
                        <button className='rounded-lg mr-8 text-black font-semibold p-4 bg-white my-10 2xl:text-xl'>
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

export default Proyecto7