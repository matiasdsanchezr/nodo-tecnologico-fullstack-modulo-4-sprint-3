import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
