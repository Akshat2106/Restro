import { Fragment, useState } from 'react';
import Cart from './components/Layout/Cart';
import Header from './components/Header'
import MealItem from './components/Layout/MealItems';
import Summary from './components/Layout/Summary';

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
    <Fragment>
     {cartOpened && <Cart toggleCartFunction={toggleCartFunction}/>}
      <Header toggleCartFunction={toggleCartFunction}/>
      <main>
        <Summary/>
      </main>
      <MealItem/>
    </Fragment>
  );
}

export default App;