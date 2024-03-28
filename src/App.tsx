import { Footer } from "./pages/footer";
import { Header } from "./pages/heder";
import { Home } from "./pages/home";
import { Product } from "./pages/product";

export function App() {
  return (
    <main className="bg-white">
      <Header />
      
      <Home />

      <Product />

      <Footer />
    </main>
  )
}
