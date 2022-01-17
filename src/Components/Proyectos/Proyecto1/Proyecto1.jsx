import React from 'react'
import "./Proyecto1.css"

const Proyecto1 = () => {
    return (
        <div className='display flex fondo-proyecto w-screen'>
            <div className='w-1/2 img-proyecto1 display flex justify-center items-center'>
                <img src="https://i.postimg.cc/FzGDLbkN/naciclo4portafolio.png" alt="imagen proyecto" />
            </div>
            <div className='w-1/2 display flex py-32 px-32'>
                <div className=''>
                    <h1 className='text-xl font-bold text-white 2xl:text-4xl'>
                        Proyecto 1 del portafolio
                    </h1>
                    <p className='text-base text-white pt-10 2xl:text-2xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, laudantium harum deserunt officiis numquam possimus officia animi eius dolor minima, ratione eligendi, veritatis ipsum atque ea porro ab asperiores sequi!
                    </p>
                    <div>
                        <button className='rounded-lg mr-8 font-semibold p-4 bg-gray-50 my-10 2xl:text-xl'>
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

export default Proyecto1
