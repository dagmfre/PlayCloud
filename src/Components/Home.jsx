import Products from "./Products";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const total = useSelector((state) => state.cart.total);

  return (
    <div className="home">
      <div className="home-cont">
        <div className="navbar">
          <div>
            <h1>Redux Toolkit</h1>
            <p>Products</p>
          </div>
          <div>
            <Link to="/cart">
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <p>{total}</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
