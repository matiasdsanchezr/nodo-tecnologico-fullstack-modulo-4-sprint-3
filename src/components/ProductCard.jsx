import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addProduct, isInCart } = useContext(CartContext);

  return (
    <div className="bg-primary dark:bg-dark-primary rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg text-center font-bold mb-2 line-clamp-3 h-20">
          {product.name}
        </h2>
        <div className="aspect-square overflow-hidden rounded bg-white flex">
          <img
            src={product.image}
            alt={`imagen de ${product.name}`}
            className="m-auto"
          />
        </div>
        <h3 className="text-md text-center">
          Precio:{" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.price)}
        </h3>
        {isInCart(product.id) ? (
          <button className="bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-active text-text-secondary py-2 px-4 rounded-md w-full font-semibold transition-colors duration-300">
            En el carrito
          </button>
        ) : (
          <button
            className="bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-dark-secondary py-2 px-4 rounded-md w-full font-semibold transition-colors duration-300"
            onClick={() => addProduct(product)}
          >
            <i className="ph ph-plus"></i> Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
