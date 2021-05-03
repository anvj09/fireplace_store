import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./component/Nav";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
        <div className="App">
            <Nav/>
            <Switch>
                <Route exact path={"/"} component={Store}/>
                <Route path={"/Cart"} component={Cart}/>
                <Route path={"/Admin"} component={Admin}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;