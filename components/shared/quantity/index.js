import { useState, useEffect } from "react";
import styles from "./Quantity.module.scss";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
const Quantity = ({ item = null, quantity, setQuantity }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const handleIncrementCounter = () => {
    setCount((prevCount) => {
      if (item) {
        setQuantity(item, prevCount + 1);
      } else {
        setQuantity(prevCount + 1);
      }
      return prevCount + 1;
    });
  };
  const handleDecrementCounter = () => {
    if (count > 1) {
      setCount((prevCount) => {
        if (item) {
          setQuantity(item, prevCount - 1);
        } else {
          setQuantity(prevCount - 1);
        }
        return prevCount - 1;
      });
    }
  };
  return (
    <div className={styles.container}>
      <p>{count}</p>
      <div className={styles.counter}>
        <IoChevronUp
          onClick={handleIncrementCounter}
          style={{ cursor: "pointer" }}
          size={20}
        />
        <div className={styles.line}></div>
        <IoChevronDown
          onClick={handleDecrementCounter}
          style={{ cursor: count == 1 ? "default" : "pointer" }}
          size={20}
          color={count == 1 && "grey"}
        />
      </div>
    </div>
  );
};

export default Quantity;
