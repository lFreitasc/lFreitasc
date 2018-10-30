import React, { Component, Fragment } from 'react';
import Nav from './components/navbarFixed';
import Profile from './images/profile.jpg';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
        <div class="container-fluid">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row align-items-center">
                  <div class="col-lg-4 col-md-6">
                    <img class="rounded-circle mx-auto d-block" src={Profile} alt="autor na temática game of thrones" title="the deadline is coming"></img>
                  </div>
                  <div class="col-lg-8 col-md-6">
                    <h2 class="text-center">Sobre</h2>
                    <h5>Estudante de Software</h5>
                    <p>6º Periodo</p>
                    <h5>UTFPR - Campus Cornélio Procópio</h5>
                    <br></br>
                    <ul>
                      <li>Criativo e Analítico</li>
                      <li>Apaixonado pelo mercado financeiro</li>
                      <li>Entusiasta nato</li>
                      <li>E por fim, sou exatamente o que você precisa e posso tornar sua vida mais fácil se me contratar.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                
                <div class="row justify-content-between">
                  <div class="col-md-6">
                    <h2 class="text-center">Experiencias</h2>
                    <h5 class="text-center">Diretório Acadêmico de Computação</h5>
                    <p class="text-center">Vice-Diretor Financeiro 2/2016 ~ 2/2018</p>
                    <h5 class="text-center">UTF GameJam</h5>
                    <p class="text-center">Segundo Lugar (2016 e 2017)</p>
                  </div>
                  <div class="col-md-6">
                    <h2 class="text-center">Técnologias</h2>
                    <p class="text-center">C</p>
                    <p class="text-center">Java</p>
                    <p class="text-center">HTML5/CSS3</p>
                    <p class="text-center">JavaScript</p>
                    <p class="text-center">C# (Unity)</p>
                    <p class="text-center">Python</p>
                    <p class="text-center">MySQL</p>
                  </div>
                </div>
                
              </div>
              <div class="carousel-item">
                
              <div class="row align-items-center">
                  <div class="col-md-6">
                      <h5 class="text-center">Projetos Academicos</h5>
                      <br></br>
                      <h5 class="text-center">Notapp</h5>
                      <p class="text-center">Oferece ao usuário maior controle na gerencia de suas notas</p>
                  </div>
                  <div class="col-md-6">
                      <h5 class="text-center">Projetos Pessoais</h5>
                      <br></br>
                      <h5 class="text-center">Simulador de investimenos</h5>
                      <p class="text-center">Não finalizado, permite que o usuario simule investimenos e impostos</p>
                  </div>
              </div>

              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
