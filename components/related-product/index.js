import styles from "./RelatedProduct.module.scss";
import Image from "next/image";
const RelatedProduct = ({ product }) => {
  const { name, image, rating } = product;
  return (
    <div className={styles.container}>
      <div className={styles.product_img_container}>
        {" "}
        <Image src={image} width={40} height={80} />
      </div>
      <div>
        <div>{name}</div>
        <div style={{ marginTop: "1rem" }}>
          {new Array(5).fill(0).map((c, i) => {
            if (i < rating) {
              return <img src={"/images/star-filled.svg"} />;
            }
            return <img src={"/images/star.svg"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
