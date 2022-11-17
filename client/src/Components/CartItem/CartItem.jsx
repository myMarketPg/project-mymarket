const CartItem = ({data, delToCart}) => {
  let {id, name, price, quantity} = data;

  return (
      <div>
          <h3>{name}</h3>
          <h5>${price} x {quantity} = ${price * quantity}</h5>
          <button onClick={() => delToCart(id)}>Eliminar uno</button>
          <br/>
          <button onClick={() => delToCart(id, true)}>Eliminar todos</button>
          <br />
          <button>Comprar</button>
      </div>
  )
};

export default CartItem;