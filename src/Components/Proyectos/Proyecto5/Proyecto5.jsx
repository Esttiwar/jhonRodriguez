import React from 'react'
import "./Proyecto5.css"

const Proyecto5 = () => {
    return (
        <div className='display fondo-proyecto5 flex bg-pink-500 w-screen'>
            <div className='w-1/2 img-proyecto5 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/tRD9S9YG/fondoproyecto1.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32 texto-p5'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Pokémon API
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        Muestra los Pokémons en tarjetas, te trae el número que le escribas y el color te lo pone dependiendo del tipo de Pokémon que sea. Si seleccionas uno, te mostrará en otra pestaña más detalladamente ese Pokémon.
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
                    <div  className='botones display flex'>
                        <div>
                            <a target="_blank" href="https://vanilla-pokemon-api.netlify.app/">
                                <button className='rounded-lg ver-proyecto mr-8 text-white font-semibold p-4 bg-black my-10 2xl:text-xl'>
                                    Ver proyecto
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/Esttiwar/poke-api">
                                <button className='rounded-lg ver-codigo text-black font-semibold border-solid border-2 border-black py-4 px-7 bg-neutral-900 my-10 2xl:text-xl'>
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

export default Proyecto5