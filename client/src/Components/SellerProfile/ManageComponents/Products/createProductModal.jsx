import React, { useState } from "react";

export default function CreateProductModal() {
    return (
        <div
            className="modal fade "
            id="createProductModal"
            tabindex="-1"
            aria-labelledby="createProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="createProductModalLabel"
                        >
                            Add Product
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">FORMULARIO DE CREACION</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-success">
                            Add Product +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
