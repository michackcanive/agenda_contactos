import React ,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard"

const ContactList = (props)=>{
  console.log(props)
  const inputEl =useRef('')
  const eliminarContacto=(id)=>{
    props.getContactoId(id)
    
  }
  
  const renderiza=props.contacto.map((contact)=>{
    return(
      <ContactCard contacto={contact} clickHander={eliminarContacto} key={contact.id} />
      )
    })
    const getPesquisa_o_que=()=>{
      props.palavras(inputEl.current.value)
    }
    
    return (<div class="container-fluid">
    <div class="container form-group">
    <div class="list-group">
    <div class="table-responsive">
    <Link to="/add">
    <button type="button" class="btn btn-primary p-2 m-2" >Adicionar Contacto</button>
    </Link>
    <div class="form-group">
    <label for="exampleFormControlInput1">Pesquisar</label>
    <input type="text"
    class="form-control"
    id="exampleFormControlInput1" 
    placeholder="palavra"
    ref={inputEl}
    value={props.o_que} 
    onChange={getPesquisa_o_que}/>
    </div>
    <table class="table text-center">
    
    <thead>
    <tr>
    <th >Icon</th>
    <th >Nome</th>
    <th >telefone</th>
    <th >Operações</th>
    </tr>
    </thead>
    <tbody>
    {renderiza.length>0 ?
      renderiza:"Nenhum contactos encontrado"}
      </tbody>
      </table>
      
      </div>
      </div>
      </div>
      
      </div>)
      
    }
    export default ContactList;