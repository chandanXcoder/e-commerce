import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-500 mt-1">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

