import React from 'react'
import { Link } from "react-router-dom";
import estilos from "../../style/Header/header.module.css"

export default function Header() {
  return (
    <nav className={estilos.containerHeader}>
        <Link to="/"><b>Home</b></Link>
        <Link to="/contacto"><b>Content</b></Link>
    </nav>
  );
}
