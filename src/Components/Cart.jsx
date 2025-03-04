import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
     
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <img src={item.images[0]} alt={item.title} width={100} />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;