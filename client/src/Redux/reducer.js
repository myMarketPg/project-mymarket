<<<<<<< HEAD
import {TYPES} from './actions'
=======
import { TYPES } from './actions'
>>>>>>> dev

const intialState = {
    allBuyers: [],
    buyerDetail: {},
    allProducts: [],
    productDetail: {},
    allCategories: [],
    categoryDetail: {},
    allOrders: [],
    orderDetail: {},
    admin: [],
    store: [],
    cart: []
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
                allProducts: action.payload,
            };
        case "GET_PRODUCT_DETAIL":
            return {
                ...state,
                productDetail: action.payload,
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                productDetail: action.payload,
            };
        //BUYERS
        case "GET_ALL_BUYERS":
            return {
                ...state,
                allBuyers: action.payload,
            };
        case "GET_BUYER_DETAIL":
            return {
                ...state,
                buyerDetail: action.payload,
            };
        case "UPDATE_BUYER":
            return {
                ...state,
                buyerDetail: action.payload,
            };
        //ADMIN
        case "GET_ADMIN":
            return {
                ...state,
                admin: action.payload,
            };
        case "UPDATE_ADMIN":
            return {
                ...state,
                admin: action.payload,
            };
        //CATEGORIES
        case "GET_ALL_CATEGORIES":
            return {
                ...state,
                allCategories: action.payload,
            };
        case "GET_CATEGORY_DETAIL":
            return {
                ...state,
                categoryDetail: action.payload,
            };
        case "UPDATE_CATEGORY":
            return {
                ...state,
                categoryDetail: action.payload,
            };
        //ORDER
        case "GET_ALL_ORDERS":
            return {
                ...state,
                allOrders: action.payload,
            };
        case "GET_ORDER_DETAIL":
            return {
                ...state,
                orderDetail: action.payload,
            };
        case "UPDATE_ORDER":
            return {
                ...state,
                orderDetail: action.payload,
            };
        ////----CARRITO DE COMPRAS-----////
        case TYPES.ADD_TO_CART: {
<<<<<<< HEAD
                let newItem = state.allProducts.find(product => product.id === action.payload);
    
                let itemInCart = state.cart.find(item => item.id === newItem.id);
    
                return itemInCart ? {
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1} 
                        : item
                        ),
                } 
                : {
                    ...state, 
                    cart: [...state.cart, {...newItem, quantity: 1}]
                }
                
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
                let itemToDelete = state.cart.find(item => item.id === action.payload);
    
                return itemToDelete.quantity < 1 ? {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} 
                        : item
                    ),
                } : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload),
                }
        }
        case  TYPES.CLEAR_CART: 
              return intialState
        
=======
            let newItem = state.allProducts.find(product => product.id === action.payload);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart ? {
                ...state,
                cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
            }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity < 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            }
        }
        case TYPES.CLEAR_CART:
            return intialState
        ///FILTROS///

>>>>>>> dev
        default:
            return state;
    }
};

export default rootReducer;
