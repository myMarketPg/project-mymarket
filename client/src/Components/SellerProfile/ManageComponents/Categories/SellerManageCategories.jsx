import { getAllCategories } from "../../../../Redux/actions";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManageCategoryNavabar from "./manageCategoryNavBar";
import CategoryTable from "./categoryTable";

export default function SellerManageCategories() {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADOS GLOBALES///

    const { allCategories } = useSelector((state) => state);

    /// ESTADOS LOCALES ///
    const [localCategories, setLocalCategories] = useState([]);

    /// HOOKS //
    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    useEffect(() => {
        setLocalCategories(allCategories);
    }, [allCategories]);

    console.log(allCategories);

    /// RENDER ///
    return (
        <div>
            <div>
                <ManageCategoryNavabar
                    localCategories={localCategories}
                    setLocalCategories={setLocalCategories}
                />
            </div>
            <div>
                <CategoryTable localCategories={localCategories} />
            </div>
        </div>
    );
}
