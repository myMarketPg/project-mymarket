/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../Context/authContext";

export default function NavBar({ localProducts }) {
  ///DISPATCH///
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, logOut, loading } = useAuth();
  console.log(user);

  const handleLogOut = async () => {
    await logOut();
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyMarket
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/sobrenosotros">
                <a className="nav-link" href="#">
                  Sobre nosotros
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registro">
                <a className="nav-link">Registrate</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busca tu producto"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
