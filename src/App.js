import logo from "./logo.svg";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Soda from "./soda";
import Chips from "./Chips";
import Tuna from "./Tuna";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>

          <Route exact path="/Tuna">
            <Tuna />
          </Route>

          <Route exact path="/">
            <VendingMachine />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
