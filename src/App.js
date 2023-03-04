import { Fragment } from "react";
import Header from "./components/Header";
import MealItem from "./components/Layout/MealItems";
import Summary from "./components/Layout/Summary";
function App() {
  return (
    
      <Fragment>
        <Header />
        <main>
          <Summary/>
        </main>
        <MealItem/>
      </Fragment>
  
  );
}

export default App;
