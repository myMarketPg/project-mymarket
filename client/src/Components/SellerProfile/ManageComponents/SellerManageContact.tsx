import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SellerManageContact() {
    const dispatch = useDispatch();
    return (
        <div>
            <form className="form-floating">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInputValue"
                    placeholder="name@example.com"
                    value="test@example.com"
                />
                <label htmlFor="floatingInputValue">Input with value</label>
            </form>
        </div>
    );
}
