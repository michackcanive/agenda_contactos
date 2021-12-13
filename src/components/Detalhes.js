import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import favicon from "../images/favicon.ico";
const Detalhes=(props)=>{
  console.log(props)
  const {nome,numero}=props.location.state.contacto

  return(
    <div class="card" >
  <img class="card-img-top" src={favicon} width="108px"  alt="Imagem de capa do card"/>
  <div class="card-body">
    <h5 class="card-title">{nome}</h5>
    <p class="card-text">{numero}</p>
  
  </div>
  <Link to="/">
      <button type="button" class="btn btn-primary p-2 m-2 float-right" >Voltar</button>
    </Link>
</div>
  )}
export default Detalhes;