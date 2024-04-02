import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { Home } from "./pages/home";
import { Product } from "./pages/product";

export function App() {
  return (
    <main>
      <Header />
      
      <Home />

      <Product />

      <Footer />
    </main>
  )
}
