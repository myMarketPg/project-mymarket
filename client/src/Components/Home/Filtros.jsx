/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../Redux/actions";
import "../../styles/Components/_Filtros.scss";

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
    {
      id: 2,
      name: "Pantalones",
    },
    {
      id: 3,
      name: "Calzado",
    },
  ]);

  ///HOOKS///
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    setLocalCategories(localCategories);
  }, [localCategories]);

  ///FUNCIONES PARA LOS FILTROS
  function handleHomeFilterByCategory(e) {
    e.preventDefault(e);
  }

  //RENDER
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <label className="text-white">Categorias:</label>
          <form>
            <select
              onChange={(e) => handleHomeFilterByCategory(e)}
              className="form-select"
              aria-label="All"
              defaultValue="All"
            >
              <option selected>Todas</option>
              {localCategories?.map((category) => {
                return <option value={category.id}>{category.name}</option>;
              })}
            </select>
          </form>
          <label className="text-white" style={{ marginLeft: "100px" }}>
            Ordernar por:
          </label>
          <form>
            <select className="form-select d-flex" aria-label="-">
              <option selected>Predeterminado</option>
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
              <option value="3">Mayor Precio a Menor Precio</option>
              <option value="5">Menor Precio a Mayor Precio</option>
              <option value="7">Mas vendidos</option>
            </select>
          </form>
        </div>
      </nav>
    </>
  );
}
