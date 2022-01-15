import React from 'react'
import "./Presentacion.css"

const Presentacion = () => {
    return (
        <div className='display flex fondo pt-10 w-screen px-20'>
            <div className='w-1/2 pt-10 px-10'>
                <h2 className='text-xl font-bold text-white 2xl:text-4xl'>
                    Hola, soy Jhon Rodríguez un Frontend Developer, apasionado por la tecnología y la innovación.
                </h2>
                <p className='text-base text-white pt-10 2xl:text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio ipsa iusto quibusdam sapiente rerum quisquam, quos ducimus dolore dolorum consectetur fugiat! Consequuntur reiciendis veniam, eos tempore quae repudiandae recusandae!
                </p>
                <div>
                    <button className='rounded-lg p-3 bg-blue-400 my-10 2xl:text-xl'>Descargar currículum</button>
                </div>
            </div>
            <div className='w-1/2  image-perfil'>
                <img src="https://i.postimg.cc/kXqvC57Z/2expo.jpg" alt="imagen de perfil" />
            </div>
        </div>
    )
}

export default Presentacion
