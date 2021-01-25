import React from 'react';
import './style.css';
import backgroundImage from '../../assets/background.png';

export const Contact = () => {
    return (
        <section className="app-contact">
            <div className="app__contact-title">
                <h1>Contato</h1>
            </div>

            <div className="app__contact-subtitle">
                <h3>Envie sua mensagem</h3>
            </div>

            <form className="app__contact-form">
                <input className="app__contact__form-input" type="text" name="name"  placeholder="Nome"></input>
                <div className="app_contact__form-wrapper">
                    <input className="app__contact__form-input" type="telphone" name="telefone" placeholder="Telefone"></input>
                    <input className="app__contact__form-input" type="email" name="email" placeholder="Email"></input>
                </div>
                <textarea className="app__contact__form-textarea" rows="10" cols="60" placeholder="Mensagem"></textarea>
                <button type="submit" className="app__contact__form-btn">Enviar</button>
            </form>
            <img className="app__contact__form-image" src={backgroundImage} alt="Imagem de fundo" />
        </section>
    )
}