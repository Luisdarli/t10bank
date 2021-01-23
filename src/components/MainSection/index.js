import React from 'react';
import './style.css';
import image from '../../assets/mainsectionImage.png'

export const MainSection = () => {
    return(
        <section className="app-main-section">
            <div className="app__main-section-wrapper">
                <h1 className="app__main-section-title">Inovação, Design e <span>Experiência</span></h1>
                <h4 className="app__main-section-subtitle">Sempre a frente em soluções digitais</h4>
                <span className="app__main-section-button">Saiba mais</span>
            </div>

            <div className="app__main-section-wrapper">
                <img src={image} alt="Imagem de Apresentação" className="app__main-section-image"></img>
            </div>
        </section>
    );
}