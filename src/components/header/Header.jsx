import React from 'react'
import { Link } from "react-router-dom";
import estilos from "../../style/Header/header.module.css"

export default function Header() {
  return (
    <nav className={estilos.containerHeader}>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
       
    </nav>
  );
}
