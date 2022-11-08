import React from 'react';
import './App.css';
import logo from './images//1p-site-logo.svg';

function App() {
  return (
  <>
   <div class="container">
      <section>
        <div class="title-area">
          <img src={logo} width="64" alt="" />
          <h1>Pass Bakery</h1>

          <address>620 N 25th St, San Francisco, CA</address>

          <h2>Hours</h2>
          <p>
            Mon-Fri 6AM-5PM PT,<br/>
            Sat-Sun 7AM-4PM PT
          </p>
        </div>
      </section>
    </div>

    <div class="container">
      <section>
        <h2>Coffee</h2>
        <ul class="menu-options">
          <li>
            <button class="add-to-cart">
              <h3>Espresso</h3>
              <div class="price">$2.75</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Cappuccino</h3>
              <div class="price">$3.50</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Latte</h3>
              <div class="price">$4.00</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Drip</h3>
              <div class="price">$2.50</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Pour Over</h3>
              <div class="price">$4.75</div>
            </button>
          </li>
        </ul>
      </section>

      <section>
        <h2>Breakfast:</h2>
        <ul class="menu-options">
          <li>
            <button class="add-to-cart">
              <h3>Oatmeal</h3>
              <div class="price">$4.00</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Toast</h3>
              <div class="price">$3.50</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Egg Sandwich</h3>
              <div class="price">$5.50</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Egg and Cheese Sandwich</h3>
              <div class="price">$6.50</div>
            </button>
          </li>
        </ul>
      </section>

      <section>
        <h2>Bread</h2>
        <ul class="menu-options">
          <li>
            <button class="add-to-cart">
              <h3>Pain de campagne</h3>
              <div class="price">$7.00</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Olive and lemon</h3>
              <div class="price">$7.50</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Brioche</h3>
              <div class="price">$8.00</div>
            </button>
          </li>
          <li>
            <button class="add-to-cart">
              <h3>Ciabatta</h3>
              <div class="price">$5.50</div>
            </button>
          </li>
        </ul>
      </section>
    </div>
  </>
  );
}

export default App;
