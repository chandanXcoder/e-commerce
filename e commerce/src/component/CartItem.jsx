import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="text-gray-800 font-medium">{item.title}</h4>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-800 font-semibold"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
