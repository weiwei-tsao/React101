import React from 'react';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './store/CartProvider';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <CartProvider>
      {showModal && <Cart showModal={showModal} setShowModal={setShowModal} />}
      <Header setShowModal={setShowModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
