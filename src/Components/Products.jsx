/** @jsxImportSource @emotion/react */
import { fetchProducts } from "./cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment } from "./cartSlice";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const bps = [576, 768, 992, 1200];

const mq = bps.map((bp) => `@media (max-width: ${bp}px)`);

const prod = css`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  padding: 3rem;
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const productCard = css`
  border: 1px solid #0000003b;
  padding: 2rem;
  border-radius: 7px;

  ${mq[3]} {
    button {
      background-color: #007bff;
      color: grey;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
        color: white;
      }
    }
    ${mq[2]} {
      h1 {
        color: red;
      }
    }
  }
`;

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
    dispatch(increment());
  };

  return (
    <div css={prod}>
      {products && products.length > 0 ? (
        products[0].map((product, index) => (
          <div key={product.id} css={productCard} className="product-card">
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <div>
              <button
                onClick={() =>
                  handleClick({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  })
                }
              >
                Add To Cart
              </button>
              <p>{product.price}$</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
