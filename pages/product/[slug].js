import styles from "./ProductDetails.module.scss";
import { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { Store } from "@/store";

import LayoutHead from "@/components/layout/LayoutHead";
import LayoutTitle from "@/components/layout/LayoutTitle";
import { Quantity, Product } from "@/components";
import data from "@/utils/products";
import Image from "next/image";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
const ProductDetails = ({ product, products }) => {
  const {
    name,
    image,
    newPrice,
    price,
    shortDescription,
    description,
    sku,
    reviews,
    categories,
    tags,
  } = product;
  const { state, dispatch } = useContext(Store);

  const [selectedImage, setSelectedImage] = useState(image);
  const [quantity, setQuantity] = useState(1);

  const setQuantityHandler = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const addToCartHandler = (newQuantity) => {
    const found = state.cart.items.find((x) => x.slug === product.slug);
    const quantity = found ? found.quantity + newQuantity : newQuantity;

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <>
      <LayoutHead title={name} />
      <LayoutTitle title={name} />
      <div className={`container  ${open_sans.className}`}>
        <section className={styles.container}>
          <div className={styles.product_images}>
            <div className={styles.product_variants}>
              <div
                onClick={() => setSelectedImage("/images/light-paddles.png")}
                className={styles.product_img_container}
                style={{ cursor: "pointer" }}
              >
                {" "}
                <Image
                  src={"/images/light-paddles.png"}
                  width={40}
                  height={80}
                />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage("/images/turf-board.png")}
                className={styles.product_img_container}
              >
                {" "}
                <Image src={"/images/turf-board.png"} width={40} height={80} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage("/images/board-paddles.png")}
                className={styles.product_img_container}
              >
                {" "}
                <Image
                  src={"/images/board-paddles.png"}
                  width={40}
                  height={80}
                />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage("/images/wet-suit.png")}
                className={styles.product_img_container}
              >
                {" "}
                <Image src={"/images/wet-suit.png"} width={40} height={80} />
              </div>
            </div>
            <div className={styles.product_img}>
              <Image src={selectedImage ? selectedImage : image} fill />
            </div>
          </div>

          <div className={styles.product_info}>
            {" "}
            <p className={styles.product_name}>{name}</p>
            {newPrice ? (
              <div className={styles.product_on_sale}>
                <p className={styles.product_price}>${newPrice}</p>
                <p className={styles.product_discounted_price}>${price}</p>
              </div>
            ) : (
              <p className={styles.product_price}>${price}</p>
            )}
            <p className={styles.product_shortDescription}>
              {shortDescription}
            </p>
            <div className={styles.addToCart}>
              <Quantity quantity={quantity} setQuantity={setQuantityHandler} />
              <button
                onClick={() => addToCartHandler(quantity)}
                className={styles.addToCart_btn}
              >
                ADD TO CART
              </button>
            </div>
            <div className={styles.product_extraInfo}>
              <ul>
                <li>
                  <span>SKU</span>: {sku}
                </li>
                <li>
                  <span>CATEGORIES</span>: {categories.join(", ")}
                </li>
                <li>
                  <span>TAGS</span>: {tags.join(", ")}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.tabs}>
          <Tabs>
            <TabList className={styles.tab}>
              <Tab style={{ borderBottom: "blue" }}>DESCRIPTION</Tab>
              <Tab>ADDITIONAL INFORMATION</Tab>
              <Tab>REVIEWS (2)</Tab>
            </TabList>

            <TabPanel style={{ fontWeight: 400 }}>
              <p>{description}</p>
            </TabPanel>
            <TabPanel>
              <p>Additional information</p>
            </TabPanel>
            <TabPanel>
              <p>Reviews</p>
            </TabPanel>
          </Tabs>
        </section>
        <section className={styles.otherProducts}>
          <div className={styles.products}>
            {products.slice(3, 6).map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: data.map((product) => ({
      params: {
        slug: product.slug,
      },
    })),
  };
};
export const getStaticProps = (context) => {
  return {
    props: {
      products: data,
      product: data.find((obj) => obj.slug === context.params.slug),
    },
  };
};
