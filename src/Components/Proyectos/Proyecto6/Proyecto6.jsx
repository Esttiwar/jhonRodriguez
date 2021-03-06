import React from 'react'
import "./Proyecto6.css"

const Proyecto6 = () => {
    return (
        <div className='display fondo-proyecto6 flex bg-blue-500'>
            <div className='w-1/2 display flex py-32 px-32 texto-p6'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        APOD NASA API
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        Conexión a API de la NASA que muestra diariamente el APOD (Astronomy Picture Of the Day) premio bastante cotizado entre los astrofotógrafos del planeta.
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
                            <a target="_blank" href="https://esttiwar.github.io/apod-nasa-api/">
                                <button className='rounded-lg ver-proyecto mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Esttiwar/apod-nasa-api">
                                <button className='rounded-lg ver-codigo text-black font-semibold border-solid border-2 border-black py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
                                    Ver código
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 img-proyecto6 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/htt7WYy2/fondo-Nasa.png" alt="imagen proyecto" />
            </div>
            
        </div>
    )
}

export default Proyecto6