import React from 'react'

const Card = ({image, title}) => {
    return (
        <div className="card">
            <img className="card__img" src={image} alt={title} />
            <div className="card__layer" />
            <h2 className="card__title">{title}</h2>
        </div>
    )
}

export default Card