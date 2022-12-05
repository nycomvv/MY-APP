import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Notfound from "../../pages/404/Notfound";
import Header from "../header/Header";




export default function Main() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}
