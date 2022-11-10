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
  return (
    <>
      <li>
        {/* <Link> */}
        <h3>{name}</h3>
        <h4>{category}</h4>
        <img src={image} alt={name} />
        <h4>{price}</h4>
        <h5>⭐{rating}</h5>
        {/* </Link> */}
      </li>
    </>
  );
};
