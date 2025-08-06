import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home.jsx";
import OrderPizza from "./pages/OrderPizza/OrderPizza.jsx";
import Success from "./pages/Success/Success.jsx";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/orderpizza" component={OrderPizza} />
        <Route path="/success" component={Success} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
