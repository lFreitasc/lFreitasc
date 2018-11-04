import React, { Fragment } from 'react';
import './index.css';
import Notapp from '../../images/notapp.jpg'
import Bazar from '../../images/bazar.jpg'

const Portfolio = () => {
    return(
        <Fragment>
        <h5 className="text-center portifolio">Portfolio</h5>
        <div className="row container-fluid">
            <div class="col-md-6 col-lg-4">
                <h5 class="text-center">Notapp</h5>
                <img src={Notapp} alt="Projeto Notapp" title="Notapp" className=" img-fluid rounded mx-auto d-block"></img>
                <p class="text-center">Armazena notas e faltas do aluno, alem de exibir a quantidades de faltas permitidas restantes.</p>
            </div>
            <div class="col-md-6 col-lg-4">
                <h5 class="text-center">Bazar do Diogo</h5>
                <img src={Bazar} alt="Bazar do Diogo" title="Bazar do Diogo" className=" img-fluid rounded mx-auto d-block"></img>
                <p class="text-center">Projeto academico, recriar site Bazar do Diogo utilizando Ajax e Json</p>
            </div>
        </div>
        </Fragment>
    );
}

export default Portfolio;
