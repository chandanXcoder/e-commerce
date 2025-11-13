import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div 
      className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-500 mt-1">₹{product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
