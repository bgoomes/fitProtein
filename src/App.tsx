import { Footer } from "./pages/footer";
import { Home } from "./pages/home";
import { Product } from "./pages/product";

export function App() {
  return (
    <main className="bg-slate-950">
      <Home />

      <Product />

      <Footer />
    </main>
  )
}
