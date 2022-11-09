// import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="social">
                <a href="https://www.instagram.com">
                    <i className="icon ion-social-instagram"></i>
                </a>
                <a href="https://www.snapchat.com">
                    <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="https://www.twitter.com">
                    <i className="icon ion-social-twitter"></i>
                </a>
                <a href="https://www.facebook.com">
                    <i className="icon ion-social-facebook"></i>
                </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/servicios">Servicios</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/sobrenosotros">Sobre Nosotros</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/terminos">Términos</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/politicas">Politicas de Privacidad</Link>
                </li>
            </ul>
            <p className="copyright">MyMarket © 2022</p>
        </footer>
    );
}
