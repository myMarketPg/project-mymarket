import React, { useEffect, useState } from 'react';
import style from "./ProductDetail.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getProductDetail} from '../../Redux/actions';


const ProductDetail = (props) => {

    // const date = useSelector((state) => state.productDetail);
    // console.log('date-->', date);

    const [localProducts, setLocalProducts] = useState(
      {
        id: 16565464684654656546546546546,
        name: "Gibson SG",
        brand: "Gibson",
        model: "SG Standard",
        img: "https://http2.mlstatic.com/D_NQ_NP_626544-MLA47691080756_092021-W.jpg",
        category: "Guitarras",
        price: 1200,
        description: "La guitarra de Angus Young",
        stock: 50,
        sales: 15,
        active: true,
      });

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   localProducts()
    // }, []);

  return (
    <div>
        <section ClassName={style.content}>
        <article className={style.demo_area}>
        <img class="rounded float-start shadow-lg p-3 mb-5 bg-body rounded-hover" src={localProducts.img} alt={localProducts.name} />
        <div className={style.detail}>
         <section>
            <h3>{localProducts.name}</h3>
            <hr/>
            <p>Specifications:</p>
            <div className={style.specification}>
              <ul class="list-group me-100">
                <li class="list-group-item active" aria-current="true">Brand</li>
                <li class="list-group-item">{localProducts.brand}</li>
                <li class="list-group-item active" aria-current="true">Model</li>
                <li class="list-group-item">{localProducts.model}</li>
                <li class="list-group-item active" aria-current="true">Category</li>
                <li class="list-group-item">{localProducts.category}</li>
              </ul>
            </div>
            <div className={style.stock}>
             <ul class="list-group mb-10">
               <li class="list-group-item d-flex align-items-center ">
                 Stock:
                 <span class="badge bg-primary rounded-pill ms-5">{localProducts.stock}</span>
               </li>
             </ul>
            </div>
            <br/>
            <hr/>
            <h4>${localProducts.price} 
            <button type="button" class="btn btn-outline-dark ms-5">Add to cart</button>
            <button type="button" class="btn btn-outline-success ms-2">Buy</button></h4>
            <h1>Description: </h1>
            <p>{localProducts.description}</p>
          </section>
        </div>
        </article>
      </section>
</div>

    /* // <div>
    //     <h1>{localProducts.name}</h1>
    //     <img className={style.zoom} src={localProducts.img} */
    /* //     data-zoom={localProducts.img} 
    //     alt={localProducts.name} />
    //     <h2>Price: ${localProducts.price} </h2>
    //     <h2>Stock: {localProducts.stock}</h2>
    //     <h2>Description: {localProducts.description}</h2>
    //     <h2>Category: {localProducts.category}</h2>
    //     <h2>Brand: {localProducts.brand}</h2>
    //     <h2>Model: {localProducts.model}</h2>
    //     <button type="button" class="btn btn-outline-success">Buy</button>
    //     <button type="button" class="btn btn-outline-dark">Add to cart</button>
    // </div> */
  )
}

export default ProductDetail