import styles from "./Footer.module.scss";
import Image from "next/image";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <footer className={`${styles.container} ${open_sans.className}`}>
      <div>
        <p>ABOUT</p>
        <p style={{ fontWeight: 400 }}>
          Bloowatch is specialized software for watersports schools (surfing,
          kitesurfing, sailing, and diving) and outdoor activity providers
        </p>
      </div>
      <div>
        <p>CONTACT</p>
        <ul>
          <li>156-677-124-442-2887</li>
          <li> wave@bloowatch.com </li>
          <li>Spain</li>
        </ul>
      </div>
      <div>
        <p>USEFUL LINKS</p>
        <ul>
          <li>About us</li>
          <li> History </li>
          <li> Contact us</li>
        </ul>
      </div>
      <div>
        <p>INSTAGRAM</p>
        <div className={styles.instagram}>
          <Image
            src="/images/1.png"
            alt="bloo-watch-logo"
            width={50}
            height={50}
            style={styles.img}
          />
          <Image
            src="/images/2.png"
            alt="bloo-watch-logo"
            width={50}
            height={50}
            style={styles.img}
          />
          <Image
            src="/images/3.png"
            alt="bloo-watch-logo"
            width={50}
            height={50}
            style={styles.img}
          />
          <Image
            src="/images/4.png"
            alt="bloo-watch-logo"
            width={50}
            height={50}
            style={styles.img}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
