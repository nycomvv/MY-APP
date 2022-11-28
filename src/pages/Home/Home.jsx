import React from 'react'

import logoHome from "../../assets/logoHome.jpg";
import "../../style/Home/Home.css"

export default function home() {
  return (
  <div className="container-home2"> 
  MI PRIMERA PAGINA USANDO <span>"React App"</span><br />
    <img src={logoHome} alt="logo"></img>
    <b>By Marcelo Vasquez</b>
  </div>
  )
}
