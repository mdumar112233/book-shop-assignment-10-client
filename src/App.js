import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/checkout'>
          <CheckOut></CheckOut>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
