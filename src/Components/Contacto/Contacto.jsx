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
                <span className='mx-5'>
                    <Icon icon="logos:linkedin-icon" width="48" height="48" inline={true} />
                </span>
                <span className='mx-5'>
                    <Icon icon="icon-park:github" width="48" height="48" inline={true} />
                </span>
            </div>
        </div>
    )
}

export default Contacto
