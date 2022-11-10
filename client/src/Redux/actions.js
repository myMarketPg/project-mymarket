import axios from "axios";

//////VARIABLES PARA LAS ACCIONES////////

export function getAllAdmins() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/users")
        return dispatch({
            type: "GET_ALL_USERS",
            payload: json.data
        })
    }
}

export const GET_SELLER_DETAIL = "GET_SELLER_DETAIL";
export const CREATE_SELLER = "CREATE_SELLER";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "CREATE_PRODUCT";
