import { useState, useRef } from "react";
import styles from "./Aside.module.scss";
import { Range } from "react-range";
import data, { categories } from "@/utils/products";
import { RelatedProduct } from "../";
import { useRouter } from "next/router";
import debounce from "lodash.debounce";
const Aside = () => {
  const router = useRouter();
  const [priceRanges, setPriceRanges] = useState([80, 180]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value) {
      router.replace({
        query: { product: e.target.value },
      });
    } else {
      router.replace({
        query: {},
      });
    }
  };
  const handlePriceFilter = (values) => {
    setPriceRanges(values);
  };
  const handleCategoryFilter = (category) => {
    router.replace({
      query: { category },
    });
  };
  const priceQueries = (values) => {
    router.replace({
      query: { priceFrom: values[0], priceTo: values[1] },
    });
  };
  const onSortHandler = (e) => {
    if (e.target.value) {
      router.replace({ query: { priceFilter: e.target.value } });
    } else {
      router.replace({ query: {} });
    }
  };
  const deboundedPriceFilter = debounce(priceQueries, 400);
  const debouncedSearch = debounce(handleSearch, 400);

  return (
    <div className={styles.container}>
      <div className={styles.select_container}>
        <select onChange={onSortHandler} className={styles.sort}>
          <option value="">Sort by:</option>
          <option value="default">Default</option>
          <option value="l-h">Price (low to high)</option>
          <option value="h-l">Price (high to low)</option>
        </select>
      </div>
      <div className={styles.searchbar}>
        <p>SEARCH</p>
        <input
          className={styles.search}
          onChange={debouncedSearch}
          placeholder="Search for a product"
        />
      </div>
      <div className={styles.price_filter}>
        <p>PRICE</p>
        <Range
          step={1}
          min={80}
          max={180}
          values={priceRanges}
          onChange={handlePriceFilter}
          onFinalChange={deboundedPriceFilter}
          renderTrack={({ props, children }) => (
            <div {...props} className={styles.range}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className={styles.range_thumb} />
          )}
        />
        <p className={styles.price_filter_display}>
          PRICE: ${priceRanges[0]} - ${priceRanges[1]}{" "}
        </p>
      </div>
      <div className={styles.categories}>
        <p>CATEGORIES</p>
        <ul>
          {Object.values(categories).map((category) => (
            <li
              onClick={() => handleCategoryFilter(category)}
              style={{ cursor: "pointer" }}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.categories}>
        <p>RELATED PRODUCTS</p>
        <ul>
          {data.slice(0, 3).map((product) => (
            <li key={product.sku}>
              <RelatedProduct product={product} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src="/images/scuba.png" width={200} />
      </div>
    </div>
  );
};

export default Aside;
