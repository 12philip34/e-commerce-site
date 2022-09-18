import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Products from './components/Products';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
