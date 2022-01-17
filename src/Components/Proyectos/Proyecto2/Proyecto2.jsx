import React from 'react'
import "./Proyecto2.css"

const Proyecto2 = () => {
    return (
        <div className='display flex bg-red-400 w-screen'>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-black 2xl:text-4xl'>
                        Proyecto 2 del portafolio
                    </h1>
                    <p className='text-base text-black pt-10 2xl:text-2xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, laudantium harum deserunt officiis numquam possimus officia animi eius dolor minima, ratione eligendi, veritatis ipsum atque ea porro ab asperiores sequi!
                    </p>
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
            <div className='w-1/2 img-proyecto2 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/tJ9BJvTB/naciclo3portafolio.png" alt="imagen proyecto" />
            </div>
            
        </div>
    )
}

export default Proyecto2
