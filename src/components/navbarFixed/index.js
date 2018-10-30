import React, { Fragment } from 'react';
import './index.css';
import cv from '../cv.pdf';
import iconCv from '../curriculum.svg';
import fb from '../facebook.svg';
import git from '../github.svg';

const Nav = () => {
    return(
        <Fragment>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Inicio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/lFreitasc" target="_blank">
                        <img src={git} width="30" height="30" alt="Github" title="Visitar Github"></img>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.facebook.com/lucas.freitascosta" target="_blank">
                        <img src={fb} width="30" height="30" alt="Facebook" title="Visitar Facebook"></img>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href={cv} download>
                        <img src={iconCv} width="30" height="30" alt="Curriculum" title="Download Curriculum"></img>
                    </a>
                </li>
                </ul>
            </div>
            </nav>
        </Fragment>
    );
}

export default Nav;
