import React from 'react'

import Content from "../../components/Content/Content"
import logoContacto from "../../assets/logoContacto.png";

export default function Contact() {
  return (
    <div className="container-home2">
      Marcelo CONTACT
       <Content />
      <img src={logoContacto} alt="logo"></img>
      <b>Curso FrontEnd USACH 2022<br /> Marcelo Vásquez</b>
    </div>
  )
}
