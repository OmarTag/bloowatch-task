import { useState, useContext } from "react";
import styles from "./Product.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { Store } from "@/store";
const Product = ({ product }) => {
  const { state, dispatch } = useContext(Store);

  const [buttonStyle, setButtonStyle] = useState({ display: "none" });

  const router = useRouter();
  const { name, categories, image, price, newPrice = null, slug } = product;
  const handleNavigation = () => {
    router.push(`/product/${slug}`);
  };
  const addToCartHandler = (e) => {
    const found = state.cart.items.find((x) => x.slug === product.slug);
    const quantity = found ? found.quantity + 1 : 1;

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  return (
    <div className={styles.container}>
      <div
        onMouseEnter={(e) => {
          setButtonStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setButtonStyle({ display: "none" });
        }}
        className={styles.product_box}
      >
        <div
          className={`${styles.product_bg} ${newPrice && styles.sale}`}
        ></div>
        <img
          onClick={handleNavigation}
          className={styles.product_img}
          src={image}
          alt={`image for product ${name}`}
        />
        <button
          style={buttonStyle}
          className={`primary_btn ${styles.addToCart}`}
          onClick={addToCartHandler}
        >
          ADD TO CART
        </button>
      </div>
      <div className={styles.product_info}>
        {" "}
        <p className={styles.product_name}>{name}</p>
        <p className={styles.product_categories}>{categories.join(", ")}</p>
        {newPrice ? (
          <div className={styles.product_on_sale}>
            <p className={styles.product_price}>${newPrice}.00</p>
            <p className={styles.product_discounted_price}>${price}.00</p>
          </div>
        ) : (
          <p className={styles.product_price}>${price}.00</p>
        )}
      </div>
    </div>
  );
};

export default Product;
