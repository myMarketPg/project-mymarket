/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Auth/LoginButton";
import Profile from "../Auth/Profile";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar({ localProducts }) {
  ///DISPATCH///
  const dispatch = useDispatch();

  const { isAuthenticated } = useAuth0();

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
          </ul>
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}

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
