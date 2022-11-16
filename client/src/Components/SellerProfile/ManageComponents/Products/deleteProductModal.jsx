import React, { useState } from "react";
import { deleteProduct, getAllProducts } from "../../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteProductModal({ id }) {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADO LOCAL////
    const [success, setSuccess] = useState();

    /////Event Handler/////

    function handleDelete(e) {
        e.preventDefault();
        dispatch(deleteProduct(id));
        alert("Product Deleted!");
        dispatch(getAllProducts());
    }

    return (
        <div
            className="modal fade "
            id="deleteProductModal"
            tabIndex="-1"
            aria-labelledby="deleteProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="deleteProductModalLabel"
                        >
                            Eliminate Product Confirmation
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">INFO DEL PRODUCTO</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => {
                                handleDelete(e);
                            }}
                        >
                            Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
