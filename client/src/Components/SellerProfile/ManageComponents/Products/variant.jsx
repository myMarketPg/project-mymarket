import React, { useState, useReducer, useEffect } from "react";

/// COMPONENTE CREADO PARA CREAR VARIANTES EN EL FORMULARIO////

/////ACA ABAJO DEJO LAS LOS ELEMENTOS QUE VAN EN EL COMPONENTE PADRE //

/////EN EL RENDER//////
/*
<div className="mb-3">
<label
    htmlFor="product-name"
    className="col-form-label"
>
    Add Variants(Stock)( add in orderof
    display):
</label>
<br />
<button
    type="button"
    className="btn btn-success"
    onClick={addVariantClick}
>
    Add Variant
</button>
<br />
<div>{variantList}</div>
</div>
*/

///CREADOR DE VARIANTS///
/*
    const addVariantClick = (e) => {
        setVariantList(
            variantList.concat(<Variante key={variantList.length} />)
        );
    };
*/

export default function Variante(key) {
    return (
        <div className="input-group mb-3 align-middle" key={key}>
            <span className="input-group-text">Name</span>
            <input
                type="text"
                aria-label="variant name"
                className="form-control"
            />
            <span className="input-group-text align-middle">Stock</span>
            <input type="number" aria-label="stock" className="form-control" />
            <button type="button" className="btn btn-danger listButton ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
