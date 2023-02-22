import Header from "./header";
import Footer from "./footer";
import { StoreProvider } from "@/store";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  weight: ["400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function Layout({ children }) {
  return (
    <StoreProvider>
      <Header className={open_sans.className} />
      <main className={open_sans.className}>{children}</main>
      <Footer className={open_sans.className} />
    </StoreProvider>
  );
}
