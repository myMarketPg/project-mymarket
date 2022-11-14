const intialState = {
    buyers: [],
    allBuyers: [],
    products: [],
    allProducts: [],
    productDetail: {},
    admin: [],
    store: []
}

function rootReducer(state = intialState, action) {
    switch (action.type) {
        //GETS
        case "GET_STORE":
            return {
                ...state,
                store: action.payload
            }
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }
        case "GET_PRODUCT_DETAIL":
            return {
                ...state,
                productDetail: action.payload
            }
        case "GET_ALL_BUYERS":
            return {
                ...state,
                buyers: action.payload,
                allBuyers: action.payload
            }
        case "GET_ADMIN":
            return {
                ...state,
                admin: action.payload
            }
        //POSTS
        case "POST_ADMIN":
            return { ...state }
        //PUTS
        case "UPDATE_STORE":
            return {
                ...state,
                store: action.payload
            }
        case "UPDATE_ADMIN":
            return {
                ...state,
                admin: action.payload
            }
        default: return state
    }
}

export default rootReducer