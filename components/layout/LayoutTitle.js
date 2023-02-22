import styles from "./Layout.module.scss";
const LayoutTitle = ({ title }) => {
  return <h1 className={styles.title}>{title.toUpperCase()}</h1>;
};

export default LayoutTitle;
