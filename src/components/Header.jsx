import { ThemeToggle } from "./ThemeButton";

export const Header = ({ onShowShoppingCart }) => {
  return (
    <header className="bg-primary dark:bg-dark-primary py-4 px-6 flex items-center justify-center text-black dark:text-white">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="font-['Orbitron'] text-2xl font-bold dark:text-accent-teal">
            NODO Tienda
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            id="openWatchlist"
            className="text-xl font-semibold hover:text-accent-teal transition-colors duration-300"
            onClick={onShowShoppingCart}
          >
            Carrito
          </button>
          <ThemeToggle />

          <i className="ph ph-user-circle text-4xl dark:text-accent-teal hover:text-button-primary-hover cursor-pointer transition-colors duration-300"></i>
        </div>
      </div>
    </header>
  );
};
