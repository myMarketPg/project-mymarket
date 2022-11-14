import React from "react";
// import { Link } from "react-router-dom";

import NavBar from "../Navbar/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            {/* <Componente buyer={[]} product={[]} /> */}
            <div className="Home_container">
                <div className="row_container">
                    <div className="row">
                        <div className="col">
                            <h1 className="col-h1">Bienvenido a My Market!</h1>
                            <h2 className="col-h2">
                                Encontra la cantidad mas variada de productos
                            </h2>
                            <h3 className="col-h3">
                                Pasarela de pagos integrada
                            </h3>
                        </div>
                        <div className="products-container">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
