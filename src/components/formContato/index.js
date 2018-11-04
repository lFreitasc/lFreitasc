import React, { Fragment } from 'react';
import './index.css'

const Form = () => {
    return (
        <Fragment>
            <form className="mx-auto">
                <div class="form-group">
                    <label for="inputName">Nome</label>
                    <input type="name" className="form-control" id="inputName" placeholder="Entre com nome"></input>
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Entre com email"></input>
                    <small id="emailHelp" className="form-text text-muted">Não compartilhamos ou armazenamos seu email</small>
                    <label for="inputSubject">Assunto</label>
                    <input type="text" className="form-control" id="inputSubject" aria-describedby="emailHelp" placeholder="Entre com o assunto"></input>
                    
                    <label for="inputMessage">Texto</label>
                    <textarea className="form-control" id="inputMessage" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary">Enviar</button>
            </form>
        </Fragment>
    )

}

export default Form;