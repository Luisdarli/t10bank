import React from 'react';
import './style.css';
import { Cards } from './Cards'

import Image1 from '../../assets/1.png';
import Image2 from '../../assets/2.png';
import Image3 from '../../assets/3.png';
import Image4 from '../../assets/4.png';

export const Works = () => {
    return (
        <section className="app-works">
            <div className="app__works-title">
                <h1>Portifólio</h1>
            </div>
            <div className="app__works-subtitle">
                <h3>Meus trabalhos</h3>
            </div>
            <div className="app__works-wrapper"> 
                <Cards  image={Image3} text={"Phone Mockup"}/>
                <Cards  image={Image4} text={"Phone Mockup"}/>
                <Cards  image={Image2} text={"Phone Mockup"}/>
                <Cards  image={Image1} text={"Phone Mockup"}/>
            </div>

        </section>
    )
}