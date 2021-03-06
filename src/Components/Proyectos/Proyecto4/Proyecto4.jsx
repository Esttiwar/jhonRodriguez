import React from 'react'
import "./Proyecto4.css"

const Proyecto4 = () => {
    return (
        <div className='display fondo-proyecto4 flex bg-green-400'>
            <div className='w-1/2 display flex py-32 px-32 texto-p4'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Rovers NASA API
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        Esta webApp muestra los Rovers de la NASA que actualmente están en Marte, puedes escoger el Rover, el número del día (sol) y desde qué cámara quieres ver las fotografías del planeta rojo.
                    </p>
                    <div className='diplay flex'>
                        <span title='HTML'>
                            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        </span>
                        <span title='CSS'>
                            <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        </span>
                        <span title='JavaScript'>
                            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                        </span>
                    </div>
                    <div className='botones display flex'>
                        <div>
                            <a target="_blank" href="https://esttiwar.github.io/rover-nasa-api/">
                                <button className='rounded-lg ver-proyecto mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Esttiwar/rover-nasa-api">
                                <button className='rounded-lg ver-codigo text-black font-semibold border-solid border-2 border-black py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
                                    Ver código
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 img-proyecto4 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/3wVbV9JG/portada.png" alt="imagen proyecto" />
            </div>
            
        </div>
    )
}

export default Proyecto4