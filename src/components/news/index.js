import React, { Fragment } from 'react';

const News = () => {
    return(
        <Fragment>
            <h5 className="text-center">O que ando vendo</h5>
            <div class="card-columns">
                <div class="card text-center text-white bg-dark mb-4">
                <div class="card-body">
                    <h5 class="card-title">"Como colocar seu site no ar de graca"</h5>
                    <p class="card-text">Calma, não é click-bait, é hospedagem grátis mesmo! Conheça e domine o Netlify para subir todos os seus projetos e freelas de um jeito fácil, rápido e otimizado.</p>
                    <a href="https://willianjusten.com.br/como-colocar-seu-site-no-ar-de-graca/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
                </div>
                <div class="card text-center text-white bg-dark mb-4">
                <div class="card-body">
                    <h5 class="card-title">"Medindo a performance do seu site com Lighthouse"</h5>
                    <p class="card-text">Uma ferramenta perfeita para dizer tudo que está bom e ruim no seu site.</p>
                    <a href="https://willianjusten.com.br/medindo-performance-do-seu-site-com-lighthouse/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
                </div>
                <div class="card text-center text-white bg-dark mb-4">
                <div class="card-body">
                    <h5 class="card-title">"Fundos quant: em busca da maximização do lucro sem a interferência humana"</h5>
                    <p class="card-text">"Se o desafio pode ser expresso em termos matemáticos, ninguém melhor do que um computador para resolvê-lo"</p>
                    <a href="https://www.infomoney.com.br/educacao/guias/noticia/1549605/fundos-quant-busca-maximizacao-lucro-sem-interferencia-humana" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
                </div>
                <div class="card text-center text-white bg-dark mb-4">
                <div class="card-body">
                    <h5 class="card-title">"Análise de dados e experiência do usuário serão foco do mercado em 2019"</h5>
                    <p class="card-text">Empresa de tecnologia analisa o mercado e antecipa tendências</p>
                    <a href="https://exame.abril.com.br/tecnologia/analise-de-dados-e-experiencia-do-usuario-serao-foco-do-mercado-em-2019/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
                </div> 
                <div class="card text-center text-white bg-dark mb-4">
                <div class="card-body">
                    <h5 class="card-title">"Tecnologias cognitivas são determinantes para o futuro dos negócios"</h5>
                    <p class="card-text">Empresas precisarão usar cada vez mais tais soluções para superar o desafio de transformar dados em informações úteis</p>
                    <a href="https://exame.abril.com.br/informe-publicitario/tecnologias-cognitivas-sao-determinantes-para-futuro-dos-negocios/?utm_content=conteudo&utm_campaign=conteudos-ricoh&utm_medium=native-list-g&utm_source=exame_tecnologia_ads" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
                </div> 
                <div class="card text-center text-white bg-dark mb-4">
                <div class="card-body">
                    <h5 class="card-title">"Hora do Código estimula ensino de programação em escolas brasileiras"</h5>
                    <p class="card-text">Iniciativa usa Frozen, Star Wars e Minecraft para estimular estudantes a aprender programação</p>
                    <a href="https://exame.abril.com.br/tecnologia/hora-do-codigo-estimula-ensino-de-programacao-em-escolas-brasileiras/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
                </div> 
            </div>
        </Fragment>
    );
}

export default News;
