import React from 'react'

const Banner = ({title, bannerImage}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={bannerImage} alt={title} />
            <div className="banner__layer" />
            <h2 className="banner__title">{title}</h2>
        </div>
    )
}

export default Banner