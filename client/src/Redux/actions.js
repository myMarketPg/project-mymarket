import axios from "axios"

/////-----RUTAS GET-----/////
export const getStore = () => {
    return async function (dispatch) {
        const data = await axios.get("http://localhost:3001/api/store");
        dispatch({
            type: "GET_STORE",
            payload: data.data,
        });
    };
};

export const getAllProducts = () => {
    return async function (dispatch) {
        const data = await axios.get(
            "http://localhost:3001/api/products"
        );
        dispatch({
            type: "GET_ALL_PRODUCTS",
            payload: data.data,
        });
    };
};

export const getProductDetail = (id) => {
    return async function (dispatch) {
        const data = await axios.get(`http://localhost:3001/api/products/${id}`);
        dispatch({
            type: "GET_PRODUCT_DETAIL",
            payload: data.data,
        });
    };
};

export const getAllBuyers = () => {
    return async function (dispatch) {
        const data = await axios.get("http://localhost:3001/api/buyers");
        dispatch({
            type: "GET_ALL_BUYERS",
            payload: data.data,
        });
    };
};

export const getAdmin = () => {
    return async function (dispatch) {
        const data = await axios.get("http://localhost:3001/api/admin");
        dispatch({
            type: "GET_ADMIN",
            payload: data.data,
        });
    };
};


/////-----RUTAS POST-----/////
export const postAdmin = () => {
    return async function (dispatch) {
        const data = await axios.post("http://localhost:3001/api/admin");
        dispatch({
            type: "POST_ADMIN",
            payload: data.data,
        });
    };
};


/////-----RUTAS PUT-----/////
export const updateStore = () => {
    return async function (dispatch) {
        const data = await axios.put("http://localhost:3001/api/store");
        dispatch({
            type: "UPDATE_STORE",
            payload: data.data,
        });
    };
};

export const updateAdmin = () => {
    return async function (dispatch) {
        const data = await axios.put("http://localhost:3001/api/admin");
        dispatch({
            type: "UPDATE_ADMIN",
            payload: data.data,
        });
    };
};

/////-----FILTROS-----/////