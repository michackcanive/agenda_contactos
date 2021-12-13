import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import favicon from "../images/favicon.ico";

const ContactCard =(props)=>{
  const {id,nome,numero}=props.contacto
  return(
        <tr>
        <td><img src={favicon} alt="icon" width="50px" /></td>
        <td>{nome}</td>
        <Link to={{pathname:`/detalhes/${id}`,state:{contacto: props.contacto}}}>
        <td>{numero}</td>
        </Link>
        
        <td>
          <Link to={{pathname:'/edit',state:{contacto:props.contacto}}}>
        <button type="button" class="btn  btn-primary m-2">E</button>
        </Link>
          <button type="button" class="btn btn-danger" onClick={()=>props.clickHander(id)} >D</button>
          </td>
        </tr>
  )}
export default ContactCard; 