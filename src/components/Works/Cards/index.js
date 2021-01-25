import React from 'react';
import './style.css'

export const Cards = ({ image, text }) => {
    return(
        <div className="app__works-cards">
            <img src={image} alt="Imagem dos nossos serviços"/>
            <div className="app__works-cards-text">
                <h1>{text}</h1>
                <div className="app__works-cards-button">
                    <a href="#">+</a>
                </div>
            </div>
        </div>
    )
}