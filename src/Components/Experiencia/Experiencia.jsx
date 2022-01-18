import React from 'react'
import "./Experiencia.css"

const Experiencia = () => {
    return (
        <div className='fondo-exp w-screen'>
            <div className=''>
                <a name="ancla-e" />
                <h1 className='text-4xl font-bold text-white 2xl:text-7xl pt-32 pb-12 text-center'>
                    Experiencia
                </h1>
            </div>
            <div>
                <h1 className='line text-4xl font-black'>______________________________</h1>
            </div>
            {/* Experiencia 1 */}
            <div className='mt-10 px-60 exp-1'>
                <div className='mt-10'>
                    <h1 className='text-white font-bold text-lg'>
                        Mision TIC-2022 
                    </h1>
                </div>
                <div>
                    <h2 className='text-gray-400 font-semibold text-lg my-2'>
                        FrontEnd Sep-Dic 2021
                    </h2>
                </div>
                <div>
                    <p className='text-white text-lg'> 
                    La experiencia que gané en los proyectos fue en la construcción de interfaces gráficas, uno fue para que los equipos de investigación realicen sus proyectos y lleven un control de sus actualizaciones y el otro fue un sistema de seguimiento de ventas y productos de los usuarios.
                    </p>
                </div>
            </div>

            {/* Experiencia 2 */}
            <div className='mt-10 px-60 exp-2'>
                <div className='mt-10'>
                    <h1 className='text-white font-bold text-lg'>
                        Student Internships UdeA
                    </h1>
                </div>
                <div>
                    <h2 className='text-gray-400 font-semibold text-lg my-2'>
                        Python Developer Mar-Jun 2020
                    </h2>
                </div>
                <div>
                    <p className='text-white text-lg'> 
                        Desarrollo a partir de un código base, un juego de Snake con niveles de dificultad utilizando la librería gráfica Turtle. Como parte del proyecto final de la asignatura "Fundamentos de Programación" del programa de Astronomía de la Universidad de Antioquia.
                    </p>
                </div>
            </div>


            {/* Habilidades Principales */}
            <div className='mt-10 px-6'>
                <div className='mt-32'>
                    <h1 className='text-white font-bold text-2xl'>Habilidades Principales</h1>
                </div>
                <div>
                    <p className='text-white text-lg'>
                    JavaScript, React, HTML5, CSS3, SASS, Git, MySQL, SQL, Python, Java, Node.JS, Express, MongoDB y Habilidades blandas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experiencia
