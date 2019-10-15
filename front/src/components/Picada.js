import React from 'react'

const DEFAULT_PLACEHODER_IMAGE = 'https://via.placeholder.com/50'

const Picada = ({ picada }) => {
    const img = picada.img === 'N/A' ? DEFAULT_PLACEHODER_IMAGE : picada.img

    return (
        <div>
            <h2>{ picada.title }</h2>
            <div>
                <img src={ picada.img } alt={ `The movie titled: ${picada.title}` } />
            </div>
            <p>({ picada.location })</p>
        </div>
    )
}

export default Picada