import { useState } from "react";
import LayoutHead from "@/components/layout/LayoutHead";
import { useContext } from "react";
import { Store } from "@/store";
import Image from "next/image";
import LayoutTitle from "@/components/layout/LayoutTitle";
import styles from "../styles/cart.module.scss";
import { Quantity } from "@/components";
import { IoCloseOutline } from "react-icons/io5";
const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = (item, newQuantity) => {
    const quantity = newQuantity;
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <>
      <LayoutHead title="Cart" description="Bloowatch Shopping Cart" />
      <LayoutTitle title="Cart" />
      <div className="container">
        {/* {cart.items.length > 0 ? ( */}
        <>
          <section className={styles.details}>
            <div className={styles.details_top}>
              <h3>PRODUCT</h3>
              <h3>PRICE</h3>
              <h3>QUANTITY</h3>
              <h3>SUBTOTAL</h3>
            </div>
            {cart.items.map((item) => (
              <div key={item.sku} className={styles.details_bottom}>
                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => removeItemHandler(item)}
                >
                  <IoCloseOutline size={25} />
                </h3>
                <div>
                  <div>
                    <Image src={item.image} width={25} height={50} />{" "}
                  </div>
                  <p>{item.name}</p>
                </div>
                <h3>${item.price}.00</h3>

                <Quantity
                  item={item}
                  quantity={item.quantity}
                  setQuantity={updateCartHandler}
                />

                <h3>${item.price * item.quantity}.00</h3>
              </div>
            ))}
            <div className={styles.actions}>
              <div className={styles.actions_btns}>
                <button className="primary_btn">APPLY COUPON</button>
                <button className="primary_btn">UPDATE CART</button>
              </div>
            </div>
          </section>
          <section className={styles.total}>
            <h2>CART TOTAL</h2>
            <ul>
              <li>
                <span>SUBTOTAL</span>{" "}
                <span>
                  $
                  {cart.items.reduce((acc, current) => {
                    return (acc += current.quantity * current.price);
                  }, 0)}
                  .00
                </span>
              </li>

              <li>
                <span>SHIPPING</span> <span>SHIPPING</span>{" "}
              </li>
              <li>
                <span>TOTAL</span>{" "}
                <span>
                  $
                  {cart.items.reduce((acc, current) => {
                    return (acc += current.quantity * current.price);
                  }, 0)}
                  .00
                </span>
              </li>
            </ul>
          </section>
        </>
        {/* ) : (
          <p>NO ITEMS IN THE CART</p>
        )} */}
      </div>
    </>
  );
};

export default Cart;
