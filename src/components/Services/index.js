import React from 'react';
import './style.css';
import backgroundImage from '../../assets/background.png';
import designImage from '../../assets/design.png';
import arrow from '../../assets/arrow.png';

export const Services = () => {
    return (
        <section className="app__services">
            <div className="app__services-title">
                <h1>Serviços</h1>
            </div>

            <div className="app__services-subtitle">
                <h1>Proporcionamos uma melhor experiência</h1>
            </div>
            <div className="app__services__design-wrapper">
                <div className="app__services__design-image">
                    <img src={backgroundImage} alt="Imagem de fundo" className="app__services__design-img"></img>
                </div>
                <div className="app__services-design">
                    <h1 className="app__services__design-title">85%</h1>
                    <div className="app__services__design-bar">
                        <div className="app__services__design-percentage"></div>
                    </div>
                    <h3 className="app__services__design-subtitle">Design UI</h3>
                    <p className="app__services__design-text">Photoshop, Illustrator</p>
                </div>

                <div className="app__services-designDetails">
                    <div className="app__services__designDetails-image">
                        <img src={designImage} alt="Logotipo" />    
                    </div>
                    <h1 className="app__services__designDetails-title">Design</h1>
                    <div className="app__services__designDetails-underline">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className="app__services__designDetails-text">Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
                    <a href="#" className="app__services__designDetails-button">Saiba mais<span className="app__services__designDetails__button-image"><img src={arrow} alt="flexa do botão"></img></span></a>
                </div>
            </div>
        </section>
    );
}