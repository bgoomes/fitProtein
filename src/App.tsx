import { Footer } from "./pages/footer";
import { Home } from "./pages/home";
import { Product } from "./pages/product";

export function App() {
  return (
    <main className="bg-white">
      <Home />

      <Product />

      <Footer />
    </main>
  )
}
