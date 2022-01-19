import React from 'react'
import "./Contacto.css"
import { Icon } from '@iconify/react';

const Contacto = () => {
    return (
        <div className='fondo-contacto'>
            <div>
                <a name="ancla-e" />
                <a name="ancla-cr" />
                <h1 className='text-4xl font-bold text-white 2xl:text-4xl pt-60 pb-12 text-center'>
                    ¿Te gustaría contactarme?
                    ¡Hazlo!
                </h1>
            </div>
            <div className='display flex'>
                <a className='mx-5' target="_blank" href="https://www.linkedin.com/in/jhon-rodriguez-correa/">
                    <span title="LinkedIn">
                        <Icon icon="logos:linkedin-icon" width="48" height="48" inline={true} />
                    </span>
                </a>
                <a className='mx-5' target="_blank" href="https://github.com/Esttiwar">
                    <span title="Github">
                        <Icon icon="logos:github-octocat" width="48" height="48" />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Contacto
