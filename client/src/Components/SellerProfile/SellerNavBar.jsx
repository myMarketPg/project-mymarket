import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function SellerNavbar() {
    const dispatch = useDispatch();

    ////ESTADOS/////

    ////RENDER////
    return (
        <div>
            <nav className="navbar bg-light justify-content-center">
                <div className="container-fluid">
                    <h2>Admin Dashboard</h2>
                    <button type="button" className="btn btn-outline-danger">
                        Log Out
                    </button>
                </div>
            </nav>
        </div>
    );
}
