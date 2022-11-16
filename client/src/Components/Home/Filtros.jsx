/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../Redux/actions";
<<<<<<< HEAD
=======
import "../../styles/Components/_Filtros.scss";
>>>>>>> dev

export default function Filtros({ localProducts }) {
  const dispatch = useDispatch();
  ///ESTADO GLOBAL///
  const { allCategories } = useSelector((state) => state);

  ///ESTADO GLOBAL///
  const [localCategories, setLocalCategories] = useState([
    {
      id: 1,
      name: "Remeras",
    },
  ]);

  ///HOOKS///
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    setLocalCategories(localCategories);
  }, [localCategories]);

  //RENDER
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
<<<<<<< HEAD
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categoria
                </a>
                <ul className="dropdown-menu">
                  {localCategories?.map((category) => {
                    return (
                      <li>
                        <a className="dropdown-item" href="#">
                          {category.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Talles
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      XL
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      L
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      S
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      XS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Order Alfabetico
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      A-Z
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Z-A
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
=======
            <div className="ul-container">
              <ul className="navbar-nav navbar-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categoria
                  </a>
                  <ul className="dropdown-menu">
                    {localCategories?.map((category) => {
                      return (
                        <li key={category.id}>
                          <a className="dropdown-item" href="#">
                            {category.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Talles
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        XL
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        L
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        S
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        XS
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Order Alfabetico
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        A-Z
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Z-A
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Precio
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mayor a Menor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Menor a Mayor
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fecha
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Antiguo a Reciente
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reciente a Antiguo
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
>>>>>>> dev
          </div>
        </div>
      </nav>
    </>
  );
}
