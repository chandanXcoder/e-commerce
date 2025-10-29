import { useState } from 'react';
import Navbar from './component/Navbar';
import ProductCard from './component/ProductCard';
import Footer from './component/Footer';
import CartItem from './component/CartItem';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ProductCard />
      <CartItem />
      <Footer />
    </>
  );
}

export default App;
