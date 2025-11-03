import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4 hover:shadow-lg transition">
      {/* Product image */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {item.name}
          </h3>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            updateQty(item.id, item.qty > 1 ? item.qty - 1 : 1)
          }
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={item.qty}
          onChange={(e) => updateQty(item.id, +e.target.value)}
          className="w-12 text-center border rounded"
        />
        <button
          onClick={() => updateQty(item.id, item.qty + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-gray-800 font-semibold w-24 text-center">
        ₹{(item.price * item.qty).toFixed(2)}
      </div>

      {/* Delete button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
