import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TYPES } from "../../Redux/actions";



export default function CardProduct(data, addToCart) {
  
  const { id, name, price, category, image, rating, description } =
    data;

    
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <Link to={"/product/" + id}>
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{price}</li>
            <li className="list-group-item">{category}</li>
            <li className="list-group-item">{rating}</li>
          </ul>
        </Link>
        <div className="card-body">
          <button onClick={() => addToCart(addToCart)}>Agregar al carrito</button>
          <button>Comprar</button>
        </div>
      </div>
    </>
  );
}
