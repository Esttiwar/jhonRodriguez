import React from 'react'
import "./Presentacion.css"

const Presentacion = () => {
    return (
        <div className='display flex justify-around fondo'>
            <div className=''>
                <h2 className='text-2xl text-white'>
                    Hola, soy Jhon Rodríguez un Frontend Developer, apasionado por la tecnología y la innovación
                </h2>
                <p className='text-lg text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio ipsa iusto quibusdam sapiente rerum quisquam, quos ducimus dolore dolorum consectetur fugiat! Consequuntur reiciendis veniam, eos tempore quae repudiandae recusandae!
                </p>
            </div>
            <div className=''>
                <img src="https://i.postimg.cc/hv6s9Spk/background.png" alt="imagen de perfil" />
            </div>
        </div>
    )
}

export default Presentacion
