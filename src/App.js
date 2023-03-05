import {useState } from 'react';
import Cart from './components/Layout/Cart';
import Header from './components/Layout/Header';
import MealItem from './components/Layout/MealItems';
import Summary from './components/Layout/Summary';
import CartProvider from './components/Store/cartProvider';


function App() {
  const [cartOpened, setcartOpened] = useState(false);
  const toggleCartFunction=()=>{
    if(cartOpened){
      setcartOpened(false);
    }else{
      setcartOpened(true);
    }
  }

  return (
    <CartProvider>
     {cartOpened && <Cart toggleCartFunction={toggleCartFunction}/>}
      <Header toggleCartFunction={toggleCartFunction}/>
      <main>
        <Summary/>
      </main>
      <MealItem/>
    </CartProvider>
  );
}

export default App;