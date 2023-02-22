import Header from "./header";
import Footer from "./footer";
import { StoreProvider } from "@/store";

export default function Layout({ children }) {
  return (
    <StoreProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </StoreProvider>
  );
}
