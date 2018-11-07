import React from 'react';
import Profile from '../../images/profile.jpg';
import './index.css';
import Ingles from '../ingles.pdf';

const Carousel = () => {
    return(
        <div className="container-fluid" id="about">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 d-none d-md-block">
                            <img className="rounded-circle mx-auto d-block" src={Profile} alt="autor na temática game of thrones" title="the deadline is coming"></img>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <h3>Sobre</h3>
                                <h5>Estudante de Software</h5>
                                <p>6º Periodo</p>
                                <h5>UTFPR - Campus Cornélio Procópio</h5>
                                <br></br>
                                <ul>
                                <li>Criativo e Analítico</li>
                                <li>Apaixonado pelo mercado financeiro</li>
                                <li>Entusiasta nato</li>
                                <li>Sou exatamente o que você precisa e posso tornar sua vida mais fácil se me contratar.</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row align-itens-center">
                        <div className="col-md-6">
                            <h3>Experiencias</h3>
                            <br></br>
                            <h5>Diretório Acadêmico de Computação</h5>
                            <p>Vice-Diretor Financeiro 2/2016 ~ 2/2018</p>
                            <h5>UTF GameJam</h5>
                            <p>Segundo Lugar (2016 e 2017)</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Conhecimentos</h3>
                            <br></br>
                            <h5>Inglês Avançado</h5>
                            <a href={Ingles} className="badge badge-light" download>Referencia</a>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <h3 className="text-center">Tecnologias</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <p>C</p>
                                <p>Java</p>
                                <p>HTML5/CSS3</p>
                                <p>JavaScript</p>
                            </div>
                            <div className="col-md-6">
                                <p>C# (Unity)</p>
                                <p>Python</p>
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h3>Projetos Academicos</h3>
                            <br></br>
                            <h5>Notapp</h5>
                            <p>Oferece ao usuário maior controle na gerencia de suas notas</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Projetos Pessoais</h3>
                            <br></br>
                            <h5>Simulador de investimenos</h5>
                            <p>Não finalizado, permite que o usuario simule investimenos e impostos</p>
                        </div>
                    </div>

                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;
