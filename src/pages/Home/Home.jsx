import React from "react";

import VkgS from "../../assets/VkgS.jpg";
import GofT from "../../assets/GofT.jpg";
import SttS from "../../assets/SttS.jpg";
import Flash from "../../assets/Flash.jpg";
import Arrow from "../../assets/Arrow.jpg";
import The100 from "../../assets/The100.jpg";
import Snatural from "../../assets/Snatural.jpg";
import "../../style/Home/Home.css";


export default function home() {
  return (
    <div>
      <div className="title">Most Popular TV Shows</div>

      <div className="text">
        Titulos de muchas series de TV de "acción", "misterio", "drama", "suspenso", "thriller",
        "fantasia". Calificados como los mas populares emitidos por TV de suscripción a partir
        del año 2005. Opcion <b>"Content"</b> entrega información más detallada de al menos 20 
        de ellos ( Nombre, Fecha de Inicio y la cadena de TV asociada)
      </div>
      <div>
      <div className="container-center">
        <div><img src={VkgS} alt=""></img></div>
        <div><img src={GofT} alt=""></img></div>
        <div><img src={SttS} alt=""></img></div>
        <div><img src={Flash} alt=""></img></div>
        <div><img src={Arrow} alt=""></img></div>
        <div><img src={The100} alt=""></img></div>
        <div><img src={Snatural} alt=""></img></div>
      </div>
      </div>
      <div className="footer">
        Curso FrontEnd USACH 2022 <br /> Marcelo Vásquez
      </div>
    </div>
  );
}
