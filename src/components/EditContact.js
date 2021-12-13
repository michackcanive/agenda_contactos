import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class EditContact extends React.Component{

constructor(props){
super(props)
const {id,nome,numero}=props.location.state.contacto
this.state={
  id,
  nome,
  numero,
}
}
  update =(e)=>{
    e.preventDefault();

    if(this.state.nome===""||this.state.numero===""){
      alert('os seu campos tenta vazios')
      return
    }
 
   this.props.updateContacto(this.state);

    this.setState({
      nome:'',
      numero:''
    })
    this.props.history.push('/');
  }

    render(){

      return(
        <div class="container form-group">
          <Link to="/">
            <button type="button" class="btn btn-primary p-2 m-2 float-right" >Voltar</button>
            </Link>
              <form onSubmit={this.update}>
                <div class="form-group ">
                  <label for="exampleInputEmail1">Ediatr Contacto </label>
                  <input type="text" class="form-control" id="nome" name="nome" aria-describedby="emailHelp" placeholder="Seu nome" 
                   value={this.state.nome}
                   onChange={
                     (e)=>this.setState({
                       nome:e.target.value
                       })}/>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="numero" name="numero" placeholder="Seu numero"
                  value={this.state.numero}
                  onChange={
                    (e)=>this.setState(
                      {numero: e.target.value}
                      )}/>
                </div>
                <button type="button" class="btn btn-primary">Editar</button>
              </form>
      </div>
      )
    }
}
export default EditContact;