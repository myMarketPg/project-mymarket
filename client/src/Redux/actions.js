import axios from "axios";

/////-----RUTAS STORE-----/////
export const getStore = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/store");
            dispatch({
                type: "GET_STORE",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateStore = (payload) => {
    return async function (dispatch) {
        try {
            const data = await axios.put(
                "http://localhost:3001/api/store",
                payload
            );
            dispatch({
                type: "UPDATE_STORE",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

/////-----RUTAS PRODUCTS-----/////
export const getAllProducts = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/products");
            dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getProductDetail = (id) => {
    return async function (dispatch) {
        try {
            const data = await axios.get(
                `http://localhost:3001/api/products/${id}`
            );
            dispatch({
                type: "GET_PRODUCT_DETAIL",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postProduct = (payload) => {
    return async function () {
        try {
            const data = await axios.post(
                "http://locahost:3001/api/products",
                payload
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateProduct = (payload, id) => {
    return async function (dispatch) {
        try {
            const data = await axios.put(
                `http://locahost:3001/api/products/${id}`,
                payload
            );
            dispatch({
                type: "UPDATE_PRODUCT",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteProduct = (id) => {
    return async function () {
        try {
            const data = await axios.delete(
                `http://localhost:3001/api/products/${id}`
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

/////-----RUTAS BUYERS----/////
export const getAllBuyers = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/buyers");
            dispatch({
                type: "GET_ALL_BUYERS",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getBuyerDetail = (id) => {
    return async function (dispatch) {
        try {
            const data = await axios.get(
                `http://localhost:3001/api/buyers/${id}`
            );
            dispatch({
                type: "GET_BUYER_DETAIL",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postBuyer = (payload) => {
    return async function () {
        try {
            const data = await axios.post(
                "http://locahost:3001/api/buyers",
                payload
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateBuyer = (payload, id) => {
    return async function (dispatch) {
        try {
            const data = await axios.put(
                `http://locahost:3001/api/buyers/${id}`,
                payload
            );
            dispatch({
                type: "UPDATE_BUYER",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteBuyer = (id) => {
    return async function () {
        try {
            const data = await axios.delete(
                `http://localhost:3001/api/buyers/${id}`
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

/////-----RUTAS ADMIN-----/////
export const getAdmin = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/admin");
            dispatch({
                type: "GET_ADMIN",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postAdmin = (payload) => {
    return async function () {
        try {
            const data = await axios.post(
                "http://localhost:3001/api/admin",
                payload
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateAdmin = (payload) => {
    return async function (dispatch) {
        try {
            const data = await axios.put(
                "http://localhost:3001/api/admin",
                payload
            );
            dispatch({
                type: "UPDATE_ADMIN",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

/////-----RUTAS CATEGORIES-----/////
export const getAllCategories = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/category");
            dispatch({
                type: "GET_ALL_CATEGORIES",
                payload: data.data.categories,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getCategoryDetail = (id) => {
    return async function (dispatch) {
        try {
            const data = await axios.get(
                `http://localhost:3001/api/category/${id}`
            );
            dispatch({
                type: "GET_CATEGORY_DETAIL",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postCategory = (payload) => {
    return async function () {
        try {
            const data = await axios.post(
                "http://locahost:3001/api/category",
                payload
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};
export const updateCategory = (payload, id) => {
    return async function (dispatch) {
        try {
            const data = await axios.put(
                `http://locahost:3001/api/category/${id}`,
                payload
            );
            dispatch({
                type: "UPDATE_CATEGORY",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteCategory = (id) => {
    return async function () {
        try {
            const data = await axios.delete(
                `http://localhost:3001/api/category/${id}`
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

////-----RUTAS ORDERS-----/////
export const getAllOrders = () => {
    return async function (dispatch) {
        try {
            const data = await axios.get("http://localhost:3001/api/order");
            dispatch({
                type: "GET_ALL_ORDERS",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOrderDetail = (id) => {
    return async function (dispatch) {
        try {
            const data = await axios.get(
                `http://localhost:3001/api/order/${id}`
            );
            dispatch({
                type: "GET_ORDER_DETAIL",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const postOrder = (payload) => {
    return async function () {
        try {
            const data = await axios.post(
                "http://locahost:3001/api/order",
                payload
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateOrder = (payload, id) => {
    return async function (dispatch) {
        try {
            const data = await axios.put(
                `http://locahost:3001/api/order/${id}`,
                payload
            );
            dispatch({
                type: "UPDATE_ORDER",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteOrder = (id) => {
    return async function () {
        try {
            const data = await axios.delete(
                `http://localhost:3001/api/order/${id}`
            );
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

/////----CARRITO DE COMPRAS----/////
export const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
};

/////-----FILTROS-----/////
