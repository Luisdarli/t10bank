import React from 'react';
import './style.css';
import imagem from '../../assets/aboutus.png'
import backgroundImage from '../../assets/background.png'

export const AboutUs = () =>{
    return(
        <section className="app-aboutus">
            <div className="app__aboutus-title">
                <h1>Sobre nós</h1>
            </div>

            <div className="app__aboutus-wrapper">
                <div className="app__aboutus__wrapper-tile">
                    <img src={imagem} alt="Imagem sobre nós" className="app__aboutus-mainImage"></img>
                    <div className="app__aboutus__wrapper-background">
                        <img src={backgroundImage} alt="Imagem de fundo" className="app__aboutus-backgroundImage"></img>
                    </div>
                </div>

                <div className="app__aboutus__wrapper-tile">
                    <h1 className="app__aboutus__wrapper-title">Qual seu próximo projeto?</h1>
                    <p className="app__aboutus__wrapper-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.</p>
                    <a href="#" className="app__aboutus__wrapper-button">Download CV</a>
                </div>
            </div>

        </section>
    )
}