import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct(
  id,
  name,
  price,
  category,
  image,
  rating,
  description,
  addToCart
) {
  return (
    <>
      <Link to={"/product/" + id}>
        <div className="card" style={{ width: "18rem" }}>
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
        </div>
      </Link>
      <div className="card-body">
        <button onClick={() => addToCart(id)}>Agregar al carrito</button>
        <button>Comprar</button>
      </div>
    </>
  );
}
