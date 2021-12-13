
import React,{useState,useEffect} from 'react';
import { uuid } from 'uuidv4';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Header from "./Header"
import api from '../api/contactos';
import ContactList from "./ContactList"
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import Detalhes  from './Detalhes';
import { async } from 'q';

function App() {
const [contactos,setContactos]=useState([])
const [Pesquisar,setpesquisa]=useState ('')
const [resultadoPesquisa,setresultadoPesquisa]=useState([])
//Pegando dados na Api Contactos

const pegar_contactos= async()=>{
  const response=await api.get('/contactos')
  return response.data;
} 

const AddContacto=async(contacto_pega)=> { 
  //console.log(contacto_valor)
const request={
  id:uuid(),
  ...contacto_pega,
}
  const response=await api.post('/contactos',request)
  setContactos([...contactos,response.data]);

}
const updateContacto= async(contacto)=>{
  const response=await api.put(`/contactos/${contacto.id}`,contacto);
  const {id,nome,numero}=response.data
  setContactos(
    contactos.map((contacto)=>{
    return contacto.id===id?{...response.data}:contacto;
  }))

}


const removerContacto= async(id)=>{
  await api.delete(`/contactos/${id}`);
  
  const listaNovoCantacto=contactos.filter((contacto)=>{
    return contacto.id!==id;
  })
  setContactos(listaNovoCantacto);
}
const pesquisarrender= (Pesquisar)=>{
    setpesquisa(Pesquisar)
    if(Pesquisar!==''){
      const novoListaContacto=contactos.filter((contacto)=>{
          return Object.values(contacto).join('').toLowerCase().includes(Pesquisar.toLowerCase())
      })
      setresultadoPesquisa(novoListaContacto)
    }else{
      setresultadoPesquisa(contactos)
    }
}

useEffect(
  ()=>{
      //const reserva_dados=JSON.parse(localStorage.getItem(Local_storage_key)) 
     // if(reserva_dados)
      //setContactos(reserva_dados)
      
      const getTodosContactos=async()=>{
        const todosContactos=await pegar_contactos();
        if(todosContactos)
        setContactos(todosContactos)
      }
      getTodosContactos();
  },
  [])

  useEffect(
    ()=>{
        //localStorage.setItem(Local_storage_key,JSON.stringify(contactos))
  
      },[contactos])
 
  return (
    <div className="container-fluid">
      <Router>  
        <Header/>
        <Switch>
        <Route 
        path="/" 
        exact 
        render={(props)=>( 
          <ContactList 
          {...props}
          contacto={Pesquisar.length<1?contactos:resultadoPesquisa} 
           getContactoId={removerContacto}
           o_que={Pesquisar}
           palavras={pesquisarrender}
          />
        )}/>
        
        <Route 
         path="/add" 
         render={
           (props)=>( 
           <AddContact {...props}
           AddContacto={AddContacto}
           />
  )}/>
   <Route 
         path="/edit" 
         render={
           (props)=>( 
           <EditContact {...props}
           updateContacto={updateContacto}
           /> )}/>

         <Route path="/detalhes/:id" component={Detalhes}/>
         
        </Switch>
      {/*<AddContact AddContacto={AddContacto}/>*/}
      {/*<ContactList contacto={contactos} getContactoId={removerContacto}/>*/}
      </Router>
     
    </div>
    
  );
}
export default App;