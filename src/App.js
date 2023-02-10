import { useState } from 'react';
import Header from './Components/Header/Header1';
import Veggies from './Components/Veggies/Veggies4';
import Cart from './Components/Cart/Cart7';
import CartProvider from './store/Cartprovider';
const App = () => {
  const [onOff, setOnOff] = useState(false);

  const openCart = () => {
    setOnOff(true);
  };
  const closeCart = () => {
    setOnOff(false);
  };
  return (
    <CartProvider>
      {onOff && <Cart bandHojaSimSIm={closeCart} />}
      <Header khuljaSimSIm={openCart} />
      <main>
        <Veggies />
      </main>
    </CartProvider>
  );
};

export default App;
