import React from 'react'
import "./Presentacion.css"

const Presentacion = () => {


    return (
        <div className='display flex fondo pt-10 px-20'>
            <div className='w-1/2 pt-10 px-10 text'>
                <h2 className='text-xl font-bold text-white 2xl:text-3xl'>
                    Hola, soy Jhon Rodríguez, un Frontend Developer apasionado por la tecnología y la innovación.
                </h2>
                <p className='text-base text-white pt-10 2xl:text-2xl'>
                    Soy una persona proactiva, honesta, curiosa, empática y resolutiva. Me gusta trabajar en equipo, asumir retos, apoyar nuevos proyectos y compartir conocimientos con la comunidad. Con ganas de tener nuevas experiencias de aprendizaje y así, crecer personal y profesionalmente.
                </p>
                <div>
                    <a className='cv' target="_blank" href="https://drive.google.com/file/d/1zDQcy0o15WCwf2p1eVl2pNmyMF1_qYQ7/view?usp=sharing" download="downloadedfile">
                        <button className='rounded-lg p-3 bg-blue-400 my-10 2xl:text-xl'>
                            Ver currículum
                        </button>
                    </a>
                </div>
            </div>
            <div className='w-1/2 image-perfil'>
                <img src="https://i.postimg.cc/kXqvC57Z/2expo.jpg" alt="imagen de perfil" />
            </div>
        </div>
    )
}

export default Presentacion
