import React, { Fragment } from 'react';
import './index.css';
import Notapp from '../../images/notapp.jpg'
import Bazar from '../../images/bazar.jpg'

const Portfolio = () => {
    return(
        <div className="portfolio">
            <h3 className="text-center portifolio" id="portfolio">Portfolio</h3>
            <div className="row container-fluid">
                <div className="col-md-6 col-lg-4">
                    <h5 className="text-center">Notapp</h5>
                    <img src={Notapp} alt="Projeto Notapp" title="Notapp" className=" img-fluid rounded mx-auto d-block"></img>
                    <p className="text-center">Armazena notas e faltas do aluno, alem de exibir a quantidades de faltas permitidas restantes.</p>
                </div>
                <div className="col-md-6 col-lg-4">
                    <h5 className="text-center">Bazar do Diogo</h5>
                    <img src={Bazar} alt="Bazar do Diogo" title="Bazar do Diogo" className=" img-fluid rounded mx-auto d-block"></img>
                    <p className="text-center">Projeto academico, recriar site Bazar do Diogo utilizando Ajax e Json</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
