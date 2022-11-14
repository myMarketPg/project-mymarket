const intialState = {
    buyers: [],
    buyerDetail: {},
    products: [],
    productDetail: {},
    categories: [],
    categoryDetail: {},
    orders: [],
    orderDetail: {},
    admin: [],
    store: [],
};

export const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        //STORE
        case "GET_STORE":
            return {
                ...state,
                store: action.payload,
            };
        case "UPDATE_STORE":
            return {
                ...state,
                store: action.payload,
            };
        //PRODUCTS
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "GET_PRODUCT_DETAIL":
            return {
                ...state,
                productDetail: action.payload,
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                productDetail: action.payload
            }
        //BUYERS
        case "GET_ALL_BUYERS":
            return {
                ...state,
                buyers: action.payload,
            };
        case "GET_BUYER_DETAIL":
            return {
                ...state,
                buyerDetail: action.payload
            }
        case "UPDATE_BUYER":
            return {
                ...state,
                buyerDetail: action.payload
            }
        //ADMIN
        case "GET_ADMIN":
            return {
                ...state,
                admin: action.payload
            }
        case "UPDATE_ADMIN":
            return {
                ...state,
                admin: action.payload,
            };
        //CATEGORIES
        case "GET_ALL_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
            }
        case "GET_CATEGORY_DETAIL":
            return {
                ...state,
                categoryDetail: action.payload
            }
        case "UPDATE_CATEGORY":
            return {
                ...state,
                categoryDetail: action.payload
            }
        //ORDER
        case "GET_ALL_ORDERS":
            return {
                ...state,
                orders: action.payload,
            };
        case "GET_ORDER_DETAIL":
            return {
                ...state,
                orderDetail: action.payload
            }
        case "UPDATE_ORDER":
            return {
                ...state,
                orderDetail: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;
