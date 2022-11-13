import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SellerManageCategories from "./ManageComponents/SellerManageCategories";
import SellerManageClients from "./ManageComponents/SellerManageClients";
import SellerManageContact from "./ManageComponents/SellerManageContact";
import SellerManageOrders from "./ManageComponents/SellerManageOrders";
import SellerManageProducts from "./ManageComponents/SellerManageProducts";
import SellerManageStore from "./ManageComponents/SellerManageStore";

export default function SellerMenuTab() {
    const dispatch = useDispatch();

    ////ESTADOS/////

    ////RENDER////
    return (
        <div>
            <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
            >
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="true"
                    >
                        Edit Contact Info
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="products-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#products-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="products-tab-pane"
                        aria-selected="false"
                    >
                        Products
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="categories-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#categories-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="categories-tab-pane"
                        aria-selected="true"
                    >
                        Categories
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="editStore-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#editStore-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="editStore-tab-pane"
                        aria-selected="true"
                    >
                        Edit Store
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="clients-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#clients-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="clients-tab-pane"
                        aria-selected="true"
                    >
                        Clients
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="orders-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#orders-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="orders-tab-pane"
                        aria-selected="true"
                    >
                        Orders
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex={0}
                >
                    <h1> COMPONENTE PARA EDITAR CONTACTO</h1>
                    <SellerManageContact />
                </div>
                <div
                    className="tab-pane fade"
                    id="products-tab-pane"
                    role="tabpanel"
                    aria-labelledby="products-tab"
                    tabIndex={0}
                >
                    <h1> COMPONENTE EDITAR PRODUCTOS</h1>
                    <SellerManageProducts />
                </div>
                <div
                    className="tab-pane fade"
                    id="categories-tab-pane"
                    role="tabpanel"
                    aria-labelledby="categories-tab"
                    tabIndex={0}
                >
                    <h1> COMPONENTE PARA EDITAR CATEGORIES</h1>
                    <SellerManageCategories />
                </div>
                <div
                    className="tab-pane fade"
                    id="editStore-tab-pane"
                    role="tabpanel"
                    aria-labelledby="editStore-tab"
                    tabIndex={0}
                >
                    <h1>COMPONENTE EDIT STORE</h1>
                    <SellerManageStore />
                </div>
                <div
                    className="tab-pane fade"
                    id="clients-tab-pane"
                    role="tabpanel"
                    aria-labelledby="clients-tab"
                    tabIndex={0}
                >
                    <h1>COMPONENTE DE INFO/ADMINISTRAR CLIENTES</h1>
                    <SellerManageClients />
                </div>
                <div
                    className="tab-pane fade"
                    id="orders-tab-pane"
                    role="tabpanel"
                    aria-labelledby="orders-tab"
                    tabIndex={0}
                >
                    <h1>COMPONENTE DE INFO/ADMINISTRAR ORDENES</h1>
                    <SellerManageOrders />
                </div>
            </div>
        </div>
    );
}
