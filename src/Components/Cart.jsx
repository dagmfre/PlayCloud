import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const handleClick = (item) => {
    dispatch(removeFromCart(item));
  };

  return cartProducts.map((product) => (
    <div className="products">
      <div key={product.id} className="product-card">
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <div>
          <button
            onClick={() =>
              handleClick({
                id: product.id,
              })
            }
          >
            Remove From Cart
          </button>
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  ));
}
