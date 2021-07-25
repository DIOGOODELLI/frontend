import React from "react";
import 'bootswatch/dist/cyborg/bootstrap.css'
import axios from 'axios'
import ListaFuncionarios from "./ListaFuncionarios";

class Funcionarios extends React.Component {

    state = {
        nome: '',
        sobrenome: '',
        email: '',
        numeroNis: ''
    }

   salvar = () => {
       axios.post('http://localhost:8080/api/funcionarios/gravarFuncionarios', {
            nome : this.state.nome,
            sobrenome : this.state.sobrenome,
            email : this.state.email,
            numeroNis : this.state.numeroNis
        }).then ( response => {
            console.log(response)
        }).catch ( erro => {
            console.log(erro)
        })
   }

  render() { return (
     <div className="container">
        <div className="row">
            <div className="card mb-3">
                 <h3>Cadastro de Funcionários</h3>
                 <div className="row">
                    <div className="col-lg-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nome">Nome: *</label>
                                <input 
                                className="form-control" 
                                id="nome" placeholder="Digite o Nome" 
                                value={this.state.nome}
                                required="true"
                                onChange={e => this.setState({nome : e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sobrenome">Sobrenome: *</label>
                                <input 
                                className="form-control" 
                                id="sobrenome"  
                                placeholder="Digite o sobrenome"
                                value={this.state.sobrenome}
                                required="true"
                                onChange={e => this.setState({sobrenome : e.target.value})}
                                 />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email: *</label>
                                <input type="email" 
                                className="form-control" 
                                id="email" placeholder="Digite o email" 
                                value={this.state.email}
                                required="true"
                                onChange={e => this.setState({email : e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="numeroNis">NIS: *</label>
                                <input className="form-control" 
                                id="numeroNis"
                                 placeholder="Digite o nis" 
                                 value={this.state.numeroNis}
                                 required="true"
                                 onChange={e => this.setState({numeroNis : e.target.value})}
                                 />
                            </div>
                            <br/>
                            <div className="form-group">
                                <button type="button" className="btn btn-success" onClick={this.salvar}>Salvar</button>
                                <button type="button" className="btn btn-danger">Voltar</button>
                            </div>
                            <div className="row">
                                <ListaFuncionarios />
                            </div>
                        </form>
                    </div>
                 </div>
            </div>
        </div>    
     </div>    
    );
  }
}
export default Funcionarios;
