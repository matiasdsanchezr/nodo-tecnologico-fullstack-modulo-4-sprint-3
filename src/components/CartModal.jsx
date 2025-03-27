import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
  const { removeProduct, updateQuantity } = useContext(CartContext);

  return (
    // Card Component
    <div className="flex flex-col items-center bg-primary dark:bg-dark-primary rounded-lg shadow-md overflow-hidden p-4 space-x-4 sm:flex-row">
      {/* Image */}
      <img
        src={product.image}
        alt={`portada de ${product.name}`}
        className="w-20 h-28 object-cover rounded-md bg-white"
      />
      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-1 items-center sm:items-start">
        <h3 className="dark:text-text-primary text-lg font-bold">
          {product.name}
        </h3>
        <h3>
          Precio{" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.price)}
        </h3>
        <div className="flex">
          <button
            className="bg-gray-100 dark:bg-white/25 py-1 px-2 rounded-l-full hover:text-accent-teal hover:scale-110 active:scale-95"
            onClick={() => updateQuantity(product.id, product.count - 1)}
          >
            -
          </button>
          <input
            min={1}
            type="text"
            value={product.count}
            className="bg-gray-100 dark:bg-white/25 w-12 p-1 text-center"
            disabled
          />
          <button
            className="bg-gray-100 dark:bg-white/25 py-1 px-2 rounded-r-full hover:text-accent-teal hover:scale-110 active:scale-95"
            onClick={() => updateQuantity(product.id, product.count + 1)}
          >
            +
          </button>
        </div>
        <hr className="my-2 w-full dark:border-white" />
        <h3>{`Subtotal (${product.count} item): ${new Intl.NumberFormat(
          "es-AR",
          {
            style: "currency",
            currency: "ARS",
          },
        ).format(product.price * product.count)}`}</h3>
      </div>
      {/* Remove Button */}
      <button
        className="bg-state-error hover:bg-red-600 active:bg-red-700 text-text-primary py-2 px-4 rounded-md font-semibold transition-colors duration-300"
        onClick={() => removeProduct(product.id)}
      >
        <i className="ph ph-trash"></i> Eliminar
      </button>
    </div>
  );
};

export const CartModal = ({ isModalOpen, onCloseCart }) => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleClickOutsideModal = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      onCloseCart();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-shadow-medium bg-opacity-75 ${
        isModalOpen ? "flex" : "hidden"
      } justify-center items-center z-50`}
      onClick={handleClickOutsideModal}
    >
      <div className="bg-secondary dark:bg-dark-secondary rounded-lg p-6 relative w-full max-w-3xl  overflow-hidden">
        {/* <!-- Button close --> */}
        <button
          id="closeModal"
          className="absolute top-2 right-2 dark:text-text-secondary hover:text-text-primary text-2xl"
          onClick={onCloseCart}
        >
          &times;
        </button>

        {/* <!-- Content modal --> */}
        <h2 className="dark:text-text-primary text-lg font-bold text-center p-3">
          Carrito de compras
        </h2>

        {cart.length < 1 ? (
          <p className="dark:text-text-secondary text-center">
            No tienes ningún producto en tu carrito de compras.
          </p>
        ) : (
          <div className="dark:bg-dark-secondary/900 py-6 px-4 overflow-y-auto max-h-[65vh] space-y-4">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="flex p-2">
          <button
            onClick={clearCart}
            className="p-2 rounded-md m-auto border-3 dark:bg-white dark:text-black hover:border-accent-teal"
          >
            Vaciar Carrito
          </button>
        </div>

        {/* Total amount */}
        <div>
          <h3 className="text-center font-bold p-3">
            Total de la compra:{" "}
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(totalPrice())}
          </h3>
        </div>
      </div>
    </div>
  );
};
