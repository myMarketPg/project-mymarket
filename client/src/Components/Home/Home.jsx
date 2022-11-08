import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import NavBar from "../Navbar/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="body">
                <h1>Bienvenido a My Market!</h1>
                <h2>Creá tu propia tienda y potencia tu negocio!</h2>
            </div>
            <Footer />
        </div>
    );
}
