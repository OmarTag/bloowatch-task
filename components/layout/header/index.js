import Nav from "./nav";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/`);
  };
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          onClick={handleNavigation}
          src="/images/logo.png"
          alt="bloo-watch-logo"
          fill
          className={styles.img}
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
