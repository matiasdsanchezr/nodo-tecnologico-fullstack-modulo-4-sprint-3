import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProductList";
import { CartModal } from "../components/CartModal.jsx";
import products from "../data/products.json";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowCart = () => setIsModalOpen(() => true);
  const handleCloseCart = () => setIsModalOpen(() => false);

  return (
    <>
      <Header onShowShoppingCart={handleShowCart} />
      <main className="flex-1 bg-background-primary dark:bg-dark-background-primary text-black dark:text-white">
        <CartModal isModalOpen={isModalOpen} onCloseCart={handleCloseCart} />
        <ProductList products={products} />
      </main>
      <Footer />
    </>
  );
};
