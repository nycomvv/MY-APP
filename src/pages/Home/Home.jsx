import React from 'react'

import logoHome from "../../assets/logoHome.jpg";
import Content from "../../components/Content/Content";
import "../../style/Home/Home.css"

export default function home() {
  return (
  <div className="container-home2"> 
  Marcelo HOME<br />
  MI PRIMERA PAGINA USANDO <span>"React App"</span><br />
    <img src={logoHome} alt="logo"></img>
    <b>Curso FrontEnd USACH 2022<br /> Marcelo Vásquez</b>
  </div>
  )
}
