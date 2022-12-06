import React from "react";

import VkgS from "../../assets/VkgS.jpg";
import GofT from "../../assets/GofT.jpg";
import SttS from "../../assets/SttS.jpg";
import "../../style/Home/Home.css";

export default function home() {
  return (
    <div>
      <div className="title">Most Popular TV Shows</div>
     
      <div className="text">
          20 Titulos de series de Acción, Misterio, Drama, Suspenso, Thriller,
          Fantasia, etc. Calificados como los mas populares emitidos a partir del
          año 2005 en adelante.
      </div>
      <div className="container-center">
      <img   src={VkgS} alt=""></img>
      <img   src={GofT} alt=""></img>
      <img   src={SttS} alt=""></img>
      </div>
      <div className="footer">Curso FrontEnd USACH 2022 <br /> Marcelo Vásquez</div>
    </div>
  );
}
