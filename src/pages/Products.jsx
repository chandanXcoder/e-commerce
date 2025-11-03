import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: 29.99,
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 79.99,
    image: "https://via.placeholder.com/300x200?text=Keyboard",
  },
];

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
