import React from 'react'
import "./Proyecto6.css"

const Proyecto6 = () => {
    return (
        <div className='display flex bg-blue-500 w-screen'>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Proyecto 6 del portafolio
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, laudantium harum deserunt officiis numquam possimus officia animi eius dolor minima, ratione eligendi, veritatis ipsum atque ea porro ab asperiores sequi!
                    </p>
                    <div className='diplay flex'>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        </span>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
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
            <div className='w-1/2 img-proyecto6 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/htt7WYy2/fondo-Nasa.png" alt="imagen proyecto" />
            </div>
            
        </div>
    )
}

export default Proyecto6