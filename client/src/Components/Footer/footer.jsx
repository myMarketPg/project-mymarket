import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="social">
                <a href="#">
                    <i className="icon ion-social-instagram"></i>
                </a>
                <a href="#">
                    <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                    <i className="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                    <i className="icon ion-social-facebook"></i>
                </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#">Home</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Servicios</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Sobre Nosotros</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Términos</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Politicas de Privacidad</a>
                </li>
            </ul>
            <p className="copyright">MyMarket © 2022</p>
        </footer>
    );
}
