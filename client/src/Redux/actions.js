import axios from "axios"

/////-----RUTAS GET-----/////
export const getStore = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/store");
            dispatch({
                type: "GET_STORE",
                payload: data.data,
            });

        } catch (error) {
            console.log(error)
        }
    };
};


export const getAllProducts = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get(
                "http://localhost:3001/api/products"
            );
            dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: data.data,
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export const getProductDetail = (id) => {
    return async function (dispatch) {
        try {
            const data = await axios.get(`http://localhost:3001/api/products/${id}`);
            dispatch({
                type: "GET_PRODUCT_DETAIL",
                payload: data.data,
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export const getAllBuyers = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/buyers");
            dispatch({
                type: "GET_ALL_BUYERS",
                payload: data.data,
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export const getAdmin = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/admin");
            dispatch({
                type: "GET_ADMIN",
                payload: data.data,
            });
        } catch (error) {
            console.log(error)
        }
    };
};


/////-----RUTAS POST-----/////
export const postAdmin = (payload) => {
    return async function () {
        try {
            const data = await axios.post("http://localhost:3001/api/admin", payload);
            return data
        } catch (error) {
            console.log(error)
        }
    };
};


/////-----RUTAS PUT-----/////
export const updateStore = (payload) => {
    return async function (dispatch) {
        try {
            const data = await axios.put("http://localhost:3001/api/store", payload);
            dispatch({
                type: "UPDATE_STORE",
                payload: data.data,
            });
        } catch (error) {
            console.log(error)
        }
    };
};

export const updateAdmin = (payload) => {
    return async function (dispatch) {
        try {
            const data = await axios.put("http://localhost:3001/api/admin", payload);
            dispatch({
                type: "UPDATE_ADMIN",
                payload: data.data,
            });
        } catch (error) {
            console.log(error)
        }
    };
};

/////-----FILTROS-----/////