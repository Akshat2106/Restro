import { Fragment } from 'react';
import Cart from './components/Layout/Cart';
import Header from './components/Header'
import MealItem from './components/Layout/MealItems';
import Summary from './components/Layout/Summary';


function App() {
  return (
    <Fragment>
    <Cart/>
      <Header />
      <main>
        <Summary/>
      </main>
      <MealItem/>
    </Fragment>
  );
}

export default App;