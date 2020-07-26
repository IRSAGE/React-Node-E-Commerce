import React from 'react';
import data from './data';
import './index.css';

const openMenu= () =>{
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () =>{
  document.querySelector(".sidebar").classList.remove("open");
}
function App() {
  return (
    <div className="grid-container">
        <header className="header">
            
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Amazone</a></div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close" onClick={closeMenu}>X</button>
          <ul>
              <li><a href="index.html">Pants</a></li>
              <li><a href="index.html">Shirts</a></li>
          </ul>
        </aside>
        <main className="main">
            <div className="content">
                <ul className="products">
                  {
                    data.products.map(product =>
                      <li>
                        <div className="product">
                            <img className="product-image" src={product.image} alt="product" />
                    <div className="product-name"><a href="product.html">{product.name}</a></div>
                    <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Stars {product.numReviews} Reviews</div>
                      </div>
                    </li>
                    )
                  }
                    
                </ul>
            </div>
        </main>
        <footer className="footer">
            All Right Reserved.
        </footer>
    </div>
  );
}

export default App;