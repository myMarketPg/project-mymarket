import React from "react";
import imagen1 from "./carrusel1.jpg";
import imagen2 from "./carrusel2.jpg";
import imagen3 from "./carrusel3.jpg";
import "../../../styles/Components/_Carrusel.scss";

export default function Carrusel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} className="d-block w-100" alt="imagen 1" />
        </div>
        <div className="carousel-item">
          <img src={imagen2} className="d-block w-100" alt="imagen 2" />
        </div>
        <div className="carousel-item">
          <img src={imagen3} className="d-block w-100" alt="imagen 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
