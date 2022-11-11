import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  rating: number;
  description: string;
}

export const CardProduct: React.FC<IProps> = ({
  id,
  name,
  price,
  category,
  image,
  rating,
  description,
}: IProps) => {
  const style: object = { margin: "18rem" };

  return (
    <>
      <div className="card" style={style}>
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
        <div className="card-body">
          <a href="#" className="card-link">
            Carrito
          </a>
          <a href="#" className="card-link">
            Comprar
          </a>
        </div>
      </div>
    </>
  );
};
