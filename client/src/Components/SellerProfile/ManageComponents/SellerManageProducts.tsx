import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SellerManageProducts() {
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
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <td>1</td>
                        <td>Remera Blanca Lisa</td>
                        <td>Remeras</td>
                        <td>$1200</td>
                        <td>50</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jean Azul</td>
                        <td>Pantalones</td>
                        <td>$5000</td>
                        <td>25</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Zapas Nike</td>
                        <td>Calzado</td>
                        <td>$15.000</td>
                        <td>15</td>
                        <td>35</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
