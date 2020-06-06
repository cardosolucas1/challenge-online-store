import React from 'react';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import './App.css';
const products = require('./frontend-challenge/products.json');

function App() {
  return (
    <div className="Home-Container">
      <section className="Header-And-Products">
        <Header />
        <Products products={products}/>
      </section>
      <aside className="Cart-Aside">
        <Cart />
      </aside>
    </div>
  );
}

export default App;

