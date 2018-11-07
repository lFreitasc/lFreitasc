import React from 'react';
import './index.css';
import cv from '../cv.pdf';
import fb from '../facebook.svg';
import git from '../github.svg';

const Nav = () => {
    return(
            <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Inicio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="#about" className="nav-link">Sobre</a>
                </li>
                <li>
                    <a href="#portfolio" className="nav-link">Portifolio</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contato</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={cv} download>
                        Curriculum
                    </a>
                </li>
                </ul>
                <ul className="navbar-nav ">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/lFreitasc" target="_blank" rel="noopener noreferrer">
                        <img src={git} width="30" height="30" alt="Github" title="Visitar Github"></img>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.facebook.com/lucas.freitascosta" target="_blank" rel="noopener noreferrer">
                        <img src={fb} width="30" height="30" alt="Facebook" title="Visitar Facebook"></img>
                    </a>
                </li>
                </ul>
            </div>
            </nav>
    );
}

export default Nav;
