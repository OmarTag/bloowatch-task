import styles from "./Nav.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
const Nav = () => {
  const [hambMenuOpen, setHamMenuOpen] = useState(false);

  return (
    <nav className={`${styles.container} ${open_sans.className}`}>
      <ul className={styles.links}>
        <li>
          {" "}
          <Link href="/">SHOP</Link>
        </li>
        <li>
          {" "}
          <Link href="/">BLOG</Link>
        </li>
        <li>
          {" "}
          <Link href="/">SEARCH</Link>
        </li>
        <li>
          {" "}
          <Link style={{ display: "flex", alignItems: "center" }} href="/cart">
            {" "}
            <IoCartOutline />
            CART
          </Link>
        </li>
      </ul>
      {!hambMenuOpen ? (
        <IoMenuOutline
          onClick={() => setHamMenuOpen(true)}
          size={40}
          className={styles.hamburger}
        />
      ) : (
        <IoCloseOutline
          onClick={() => setHamMenuOpen(false)}
          size={40}
          className={styles.hamburger}
        />
      )}
      {hambMenuOpen && (
        <ul className={`${styles.links_mobile}`}>
          <li>
            {" "}
            <Link onClick={() => setHamMenuOpen(false)} href="/">
              SHOP
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={() => setHamMenuOpen(false)} href="/">
              BLOG
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={() => setHamMenuOpen(false)} href="/">
              SEARCH
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={() => setHamMenuOpen(false)} href="/cart">
              CART
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
