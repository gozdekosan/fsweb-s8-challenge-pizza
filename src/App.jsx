import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home.jsx";
import OrderPizza from "./pages/OrderPizza/OrderPizza.jsx";
import Success from "./pages/Success/Success.jsx";
import { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/orderpizza">
          <OrderPizza setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
