import React from 'react'
import "./Proyecto3.css"
import { Icon } from '@iconify/react';

const Proyecto3 = () => {
    return (
        <div className='display flex bg-black w-screen'>
            <div className='w-1/2 img-proyecto3 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/25x94fZ4/rnmportafolio.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Proyecto 3 del portafolio
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
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
                        <span className='logo-react'>
                            <img src="https://img.icons8.com/nolan/64/react-native.png"/>
                        </span>
                        <span>
                            <Icon icon="logos:tailwindcss-icon" width="48" height="48" />
                        </span>
                    </div>
                    <div>
                        <button className='rounded-lg mr-8 text-black font-semibold p-4 bg-white my-10 2xl:text-xl'>
                            Ver proyecto
                        </button>
                        <button className='rounded-lg text-white font-semibold border-solid border-2 border-white py-4 px-7 bg-black my-10 2xl:text-xl'>
                            Ver código
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Proyecto3