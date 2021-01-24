import React from 'react';
import './style.css'
import logo from '../../assets/logo.png'
import { HeaderList } from './HeaderList'

export const Header = () => {
    return (
        <header className="app__header">
            <div className="app__header-logo">
                <img src={logo} alt="Logotipo T10 Bank"></img>
            </div>

            <div className="app__header-list">
                <ul>
                    <HeaderList item={"Home"} />
                    <HeaderList item={"Sobre nós"} />
                    <HeaderList item={"Serviços"} />
                    <HeaderList item={"Portifólio"} />
                    <HeaderList item={"Contato"} />
                </ul>
            </div>
        </header>
    )
}