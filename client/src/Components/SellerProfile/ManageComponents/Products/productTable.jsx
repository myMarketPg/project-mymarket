import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteProductModal from "./deleteProductModal";
import DetailProductModal from "./detailProductModal";
import EditProductModal from "./editProductModal";

export default function ProductTable({ localProducts }) {
    //DISPATCH //
    const dispatch = useDispatch();

    return (
        <div className="table-responsive">
            <table className="table table-hover ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Sales</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {localProducts?.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>
                                    {" "}
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#detailProductModal"
                                    >
                                        {product.name}
                                    </button>
                                </td>
                                <td>{product.category}</td>
                                <td>{`$${product.price}`}</td>
                                <td>{product.stock}</td>
                                <td>{product.sales}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProductModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                            ></path>
                                        </svg>
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-danger "
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteProductModal"
                                    >
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
                                                fill-rule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <DeleteProductModal id={product.id} />
                                    <EditProductModal />
                                    <DetailProductModal product={product} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
