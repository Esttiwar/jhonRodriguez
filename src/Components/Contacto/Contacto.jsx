import React from 'react'
import "./Contacto.css"
import { Icon } from '@iconify/react';

const Contacto = () => {
    return (
        <div className='fondo-contacto w-screen'>
            <div>
                <a name="ancla-e" />
                <h1 className='text-4xl font-bold text-white 2xl:text-4xl pt-80 pb-12 text-center'>
                    ¿Te gustaría contactarme?
                    ¡Hazlo!
                </h1>
            </div>
            <div className='display flex'>
                <a className='mx-5' target="_blank" href="https://www.linkedin.com/in/jhon-rodriguez-correa/">
                    <span>
                        <Icon icon="logos:linkedin-icon" width="48" height="48" inline={true} />
                    </span>
                </a>
                <a className='mx-5' target="_blank" href="https://github.com/Esttiwar">
                    <span>
                        <Icon icon="icon-park:github" width="48" height="48" inline={true} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Contacto
