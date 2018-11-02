import React, { Fragment } from 'react';
import './index.css';
import Notapp from '../../images/notapp.jpg'
import Bazar from '../../images/bazar.jpg'

const Portfolio = () => {
    return(
        <div className="container-fluid">
        <h5 className="text-center portifolio">Portfolio</h5>
            <div class="col-md-6">
                <h5 class="text-center">Notapp</h5>
                <img src={Notapp} alt="Projeto Notapp" title="Notapp" className=" img-fluid rounded mx-auto d-block"></img>
                <p class="text-center">Armazena notas e faltas do aluno, alem de exibir a quantidades de faltas permitidas restantes.</p>
                
            </div>

        </div>
    );
}

export default Portfolio;
