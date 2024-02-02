import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from '../store/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  // this will automatically recieve the latest state snapshot
  const cartQuantity = useCartSelector((state) => state.cart.items.reduce((currentVal, currentItem) => currentVal + currentItem.quantity, 0)); // 0 is the starting value/currentValue if first time executed

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
