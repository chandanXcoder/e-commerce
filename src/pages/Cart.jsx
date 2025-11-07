import CartItem from "../component/CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart खाली है 😅</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="text-right mt-4 text-lg font-semibold">
            Total: ₹{total.toFixed(2)}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Clear Cart
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
