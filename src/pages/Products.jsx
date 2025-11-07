import React, { useContext } from "react";
import ProductCard from "../component/ProductCard";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="pt-24 pb-12 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🛍️ Our Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
