import React from 'react';
import './style.css'
import logo from '../../assets/logo.png'
import { HeaderList } from './HeaderList';

//BOOTSTRAP BUTTON
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = () => {
    return (
        <header className="app-header">
            <div className="app__header-logo">
                <img src={logo} alt="Logotipo T10 Bank"></img>
            </div>

            <div className="app__header-list">
                <div className="app__header__list-button">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="app__header__list__button-style">
                            Menu
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Home</Dropdown.Item>
                            <Dropdown.Item href="#">Sobre nós</Dropdown.Item>
                            <Dropdown.Item href="#">Serviços</Dropdown.Item>
                            <Dropdown.Item href="#">Portifólio</Dropdown.Item>
                            <Dropdown.Item href="#">Contato</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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