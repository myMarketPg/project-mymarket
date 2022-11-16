import { getAllProducts } from "../../../../Redux/actions";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManageProductsNavabar from "./manageProductsNavBar";
import ProductTable from "./productTable";

export default function SellerManageProducts() {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADOS GLOBALES///

    const { allProducts } = useSelector((state) => state);

    /// ESTADOS LOCAL ///
    const [localProducts, setLocalProducts] = useState([
        {
            id: 1,
            name: "Remera Blanca Lisa",
            img: "https://i.pinimg.com/550x/aa/e5/31/aae5310bb7af7bf1d514a78ed307c214.jpg",
            category: "Remeras",
            price: 1200,
            description: "Una remera muy buena y linda",
            stock: 50,
            sales: 15,
            active: true,
        },
    ]);

    /// HOOKS //
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    /*
    useEffect(() => {
        setLocalProducts(allProducts);
    }, [allProducts]);
*/
    console.log(allProducts);

    /// RENDER ///
    return (
        <div>
            <div>
                <ManageProductsNavabar
                    localProducts={localProducts}
                    setLocalProducts={setLocalProducts}
                />
            </div>
            <div>
                <ProductTable localProducts={localProducts} />
            </div>
        </div>
    );
}
