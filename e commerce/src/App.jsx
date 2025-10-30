import { useState } from 'react';
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCard';
import Footer from './component/Footer';
import CartItem from './component/CartItem';
import Cart from './component/pages/Cart';
import ProductDetail from './component/pages/ProductDetail';
import Products from './component/pages/Products';
import Home from './component/pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
