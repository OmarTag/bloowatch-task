import LayoutTitle from "@/components/layout/LayoutTitle";
import LayoutHead from "@/components/layout/LayoutHead";
import { Aside, Product } from "@/components";
import data from "@/utils/products";
import { useRouter } from "next/router";
import styles from "../styles/ProductList.module.scss";
import { useState } from "react";
import isEmpty from "lodash.isempty";

export default function ProductList() {
  const router = useRouter();
  const [products, setProducts] = useState(data);
  const { query } = router;
  // found a product from search
  const singleProduct =
    query.product &&
    products.find((obj) => obj.name === query.product.toUpperCase());

  // found single or multiple products from price filtering
  const priceFilteredProducts =
    query.priceFrom &&
    query.priceTo &&
    products.filter(
      (obj) =>
        (obj.newPrice >= query.priceFrom || obj.price >= query.priceFrom) &&
        (obj.newPrice <= query.priceTo || obj.price <= query.priceTo)
    );

  if (query.priceFilter) {
    if (query.priceFilter === "l-h") {
      products.sort(
        (a, b) => (a.newPrice || a.price) - (b.newPrice || b.price)
      );
    }
    if (query.priceFilter === "h-l") {
      products.sort(
        (a, b) => (b.newPrice || b.price) - (a.newPrice || a.price)
      );
    }
    if (query.priceFilter === "default") {
    }
  }

  const onSortHandler = (e) => {
    if (e.target.value) {
      router.replace({ query: { priceFilter: e.target.value } });
    } else {
      router.replace({ query: {} });
    }
  };
  return (
    <>
      {" "}
      <LayoutHead
        itle={singleProduct ? singleProduct.name : `Shop`}
        description="Bloowatch Shop"
      />
      <LayoutTitle
        title={
          query.category
            ? query.category
            : singleProduct
            ? singleProduct.name
            : `Shop`
        }
      />
      <section className={`${styles.container}`}>
        <div className={styles.select_container}>
          <select onChange={onSortHandler} className={styles.sort}>
            <option value="">Sort by:</option>
            <option value="default">Default</option>
            <option value="l-h">Price (low to high)</option>
            <option value="h-l">Price (high to low)</option>
          </select>
        </div>
        {singleProduct ? (
          <div className={styles.single_product}>
            <Product product={singleProduct} />{" "}
          </div>
        ) : !isEmpty(priceFilteredProducts) ? (
          <div className={styles.products}>
            {" "}
            {priceFilteredProducts.map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </div>
        ) : !priceFilteredProducts ? (
          <div className={styles.products}>
            {" "}
            {products.map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <p> NO RESULTS</p>{" "}
          </div>
        )}
        <Aside />
      </section>
    </>
  );
}
