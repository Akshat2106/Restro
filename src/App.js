import { Fragment } from "react";
import Header from "./components/Header";
import Summary from "./components/Layout/Summary";
function App() {
  return (
    
      <Fragment>
        <Header />
        <main>
          <Summary/>
        </main>
      </Fragment>
  
  );
}

export default App;
