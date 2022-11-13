import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SellerManageContact() {
    const dispatch = useDispatch();
    const [contactForm, setContactForm] = useState({});

    return (
        <div className="justify-content-center">
            <form className="row g-3 w-25 p-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                    />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                    />
                </div>
                <div className="col-md-7">
                    <label htmlFor="inputState" className="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputState"
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                        Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
