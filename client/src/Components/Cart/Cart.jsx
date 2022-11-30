import {  useState } from 'react';
import { TYPES } from '../actions/shoppingactions';
import CartItem from '../CartItem';
import CardProduct from '../CardProduct';
import { useDispatch } from 'react-redux';
// import { initialState, rootReducer } from "../../Redux/reducer";


const Cart = () => {
  
    const dispatch = useDispatch();
    const [cart, setCart]= useState((state) => state.cart);
    // const [state, dispatch] = useReducer(rootReducer, initialState);
    // const [allProducts, cart] =  state;

    const addToCart = (id) => {
        console.log(id)
        dispatch({type: TYPES.ADD_TO_CART, payload: id});
    };
    
    const delToCart = (id, all = false) => {
        if(all) {
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
        } else {
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
        }
    };
    
    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    };

    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article>
                {allProducts.map((product) => 
                <CardProduct key={product.id} data={product} addToCart={addToCart} 
                />
                )}
            </article>
            <h3>Carrito</h3>
            <article>
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item, index) => 
                    <CartItem key={index} data={item} delToCart={delToCart} />
                    )
                }
            </article>
        </div>
    )
};

export default Cart;

