import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Redux/actions.js";
import { useDispatch } from "react-redux";
import NavBar from "../Navbar/NavBar.jsx";
import CardProduct from "../CardProduct/CardProduct.jsx";
import Filtros from "./Filtros";
import Carrusel from "./Carrusel/Carrusel.jsx";

export default function Home() {
  ///DISPATCH///
  const dispatch = useDispatch();

  ///ESTADOS GLOBALES///
  //   const { allProducts } = useSelector((state) => state);

  /// ESTADOS LOCAL ///
  const [localProducts, setLocalProducts] = useState([
    {
      id: 1,
      name: "Remera Blanca Lisa",
<<<<<<< HEAD
      image:
        "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
      category: "Remeras",
      price: 1200,
      stock: 50,
      sales: 15,
=======
      price: 1200,
      category: "Remera",
      image:
        "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
      rating: 1,
      description: "hola",
      addToCart: 1,
    },
    {
      id: 1,
      name: "Remera Blanca Lisa",
      price: 1200,
      category: "Remera",
      image:
        "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
      rating: 1,
      description: "hola",
      addToCart: 1,
    },
    {
      id: 1,
      name: "Remera Blanca Lisa",
      price: 1200,
      category: "Remera",
      image:
        "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
      rating: 1,
      description: "hola",
      addToCart: 1,
    },
    {
      id: 1,
      name: "Remera Blanca Lisa",
      price: 1200,
      category: "Remera",
      image:
        "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
      rating: 1,
      description: "hola",
      addToCart: 1,
    },
    {
      id: 1,
      name: "Remera Blanca Lisa",
      price: 1200,
      category: "Remera",
      image:
        "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
      rating: 1,
      description: "hola",
      addToCart: 1,
>>>>>>> dev
    },
  ]);

  /// HOOKS ///
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setLocalProducts(localProducts);
  }, [localProducts]);

  ///RENDER///
  return (
    <div>
      <NavBar localProducts={localProducts} />
      <div className="Home_container">
        <div className="row_container">
          <div className="row">
            <Carrusel />
            <Filtros localProducts={localProducts} />
            <div className="products-container">
<<<<<<< HEAD
              <div class="container text-center">
                <div class="row">
                  {localProducts?.map((product) => {
                    return (
                      <div key={product.id}>
                        <Link to={"/product/" + product.id}>
                          <CardProduct
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                            category={product.category}
                            rating={product.rating}
                          ></CardProduct>
                        </Link>
                      </div>
                    );
                  })}
                  <div class="col">Column</div>
                  <div class="col">Column</div>
                  <div class="col">Column</div>
=======
              <div className="container text-center">
                <div className="row">
                  {localProducts?.map((product) => {
                    return (
                      <div className="col" key={product.id}>
                        <CardProduct
                          id={product.id}
                          name={product.name}
                          price={product.price}
                          category={product.category}
                          image={product.image}
                          rating={product.rating}
                          description={product.description}
                          addToCart={product.id}
                        ></CardProduct>
                      </div>
                    );
                  })}
>>>>>>> dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
