import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Products from './components/Products';

function App() {
  return (
   <div className='App'>
    <Navbar />
    <Home />
    <Products />
   </div>
  )
}

export default App;
