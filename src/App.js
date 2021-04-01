import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import ManageBook from './components/ManageBook/ManageBook';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
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
        <Route path='/checkout/:_id'>
          <CheckOut></CheckOut>
        </Route>
        <Route path='/manageBook'>
          <ManageBook></ManageBook>
        </Route>
        <Route path='/order'>
          <Orders/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
