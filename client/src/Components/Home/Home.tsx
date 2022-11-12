import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import NavBar from "../Navbar/NavBar";
import Register from "./Register";
import Componente from "../ComponentePruebaRedux/Componente";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Componente buyer={[]} product={[]} />
      <div className="Home_container">
        <div className="row_container">
          <div className="row">
            <div className="col">
              <h1 className="col-h1">Bienvenido a My Market!</h1>
              <h2 className="col-h2">
                Creá tu propia tienda y potenciá tu negocio!
              </h2>
              <h3 className="col-h3">Pasarela de pagos integrada</h3>
            </div>
            <div className="col">
              <div className="home_register">
                <Register />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
