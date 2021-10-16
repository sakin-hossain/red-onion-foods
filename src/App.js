import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import MealsProvider from './context/MealsProvider';
import Home from './Pages/Home/Home/Home';
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
          </Switch>
        </Router>
      </MealsProvider>
    </div>
  );
}

export default App;
