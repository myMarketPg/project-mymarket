import React, { useState, useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../../../Redux/actions";
import { getAllCategories } from "../../../../Redux/actions";

export default function CreateProductModal() {
    ///DISPATCH///
    const dispatch = useDispatch();
    ///ESTADOS GLOBALES///
    const { allcategories } = useSelector((state) => state);
    ///ESTADOS LOCALES///
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [checkActive, setCheckActive] = useState([]);

    /////Creo una lista de categorias en orden ascendente y Creo el componente option list/////
    let categoryList = allcategories?.map((c) => {
        return c.name;
    });
    categoryList?.sort();
    let optionsList = [];
    for (let i = 0; i < categoryList?.length; i++) {
        optionsList?.push(
            <option value={categoryList[i]} key={i}>
                {categoryList[i].charAt(0).toUpperCase() +
                    categoryList[i].slice(1)}
            </option>
        );
    }

    /////LOCAL REDUCER//////////
    let initialState = {
        name: "",
        img: "",
        category: "",
        model: "",
        brand: "",
        price: 0,
        description: "",
        stock: 0,
        active: true,
    };

    const createProductReducer = (state, action) => {
        switch (action.type) {
            case "SET_NAME": {
                return {
                    ...state,
                    name: action.payload,
                };
            }
            case "SET_MODEL": {
                return {
                    ...state,
                    model: action.payload,
                };
            }
            case "SET_BRAND": {
                return {
                    ...state,
                    brand: action.payload,
                };
            }
            case "SET_IMG": {
                return {
                    ...state,
                    img: action.payload,
                };
            }
            case "SET_CATEGORY": {
                return {
                    ...state,
                    category: action.payload,
                };
            }
            case "SET_PRICE": {
                return {
                    ...state,
                    price: action.payload,
                };
            }
            case "SET_DESCRIPTION": {
                return {
                    ...state,
                    description: action.payload,
                };
            }
            case "SET_STOCK": {
                return {
                    ...state,
                    stock: [...state.stock, action.payload],
                };
            }
            case "SET_ACTIVE": {
                return {
                    ...state,
                    active: action.payload,
                };
            }

            case "SUBMIT": {
                console.log(initialState);
                return {
                    ...state,
                    ...initialState,
                };
            }
        }
    };
    const [productForm, setProductForm] = useReducer(
        createProductReducer,
        initialState
    );

    ///HOOKS///
    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    //EVENT HANDLERS///

    function handleSubmit(e) {
        e.preventDefault();
        postProduct(productForm);
        alert("Product Created Successfuly!");
        setProductForm({ type: "SUBMIT" });
    }

    return (
        <div
            className="modal fade "
            id="createProductModal"
            tabIndex="-1"
            aria-labelledby="createProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable">
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
                    <div className="modal-body">
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <div className="mb-3">
                                <label
                                    htmlFor="product-name"
                                    className="col-form-label"
                                >
                                    Name:
                                </label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="product-name"
                                    value={productForm.name}
                                    onChange={(e) =>
                                        setProductForm({
                                            type: "SET_NAME",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="product-model"
                                    className="col-form-label"
                                >
                                    Model:
                                </label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="product-model"
                                    value={productForm.model}
                                    onChange={(e) =>
                                        setProductForm({
                                            type: "SET_MODEL",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="product-brand"
                                    className="col-form-label"
                                >
                                    Brand:
                                </label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="product-brand"
                                    value={productForm.brand}
                                    onChange={(e) =>
                                        setProductForm({
                                            type: "SET_BRAND",
                                            payload: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="inputGroupFile01"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile01"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="inputGroupFile01"
                                >
                                    Category
                                </label>
                                <select
                                    name="selectType"
                                    className="form-select"
                                    onChange={(e) => {
                                        setProductForm({
                                            type: "SET_CATEGORY",
                                            payload: e.target.value,
                                        });
                                    }}
                                >
                                    <option key="keyAllCategories" value="-">
                                        -
                                    </option>
                                    {optionsList}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                >
                                    Description:
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    value={productForm.description}
                                    onChange={(e) => {
                                        setProductForm({
                                            type: "SET_DESCRIPTION",
                                            payload: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    className="col-form-label"
                                    htmlFor="flexSwitchCheckChecked"
                                >
                                    Active
                                </label>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckChecked"
                                        onChange={(e) => {
                                            setProductForm({
                                                type: "SET_ACTIVE",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Add Product +
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
