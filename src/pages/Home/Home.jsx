import React from "react";

import logoBkd from "../../assets/logoBkd.jpg";
import "../../style/Home/Home.css";

export default function home() {
  return (
    <div>
      <div className="title">BREAKING BAD</div>
      <div><p>* Género: DRAMA * </p></div>
      <div className="text">
          Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor
          de química de un instituto de Albuquerque, Nuevo México, se entera 
          de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn)
          y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar 
          un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno
          (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende
          es liberar a su familia de problemas económicos cuando se produzca el fatal 
          desenlace.
      </div>
      <div className="container-center">
      Temporadas : 5<br />
      Directores : Vince Gilligan, Michael Slovis, Colin Bucksey<br />
      Último Episodio : 29 de septiembre de 2013 <br />
      Primer Episodio : 20 de enero de 2008 <br />
      Cantidad de episodios : 62 <br />
      Tema musical : Breaking Bad Theme <br />
      <img  width="35%"src={logoBkd}></img>
      </div>
      <div className="footer">Curso FrontEnd USACH 2022 - Marcelo Vásquez</div>
    </div>
  );
}
