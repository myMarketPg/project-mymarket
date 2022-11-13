import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SellerManageContact() {
    const dispatch = useDispatch();
    const [contactForm, setContactForm] = useState({});

    return (
        <div className="position-relative">
            <form className="row g-2 w-25 p-2 position-absolute top-50 start-40">
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
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhoneNumber"
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
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        Country
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCountry"
                    />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn  btn-success btn-lg">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
