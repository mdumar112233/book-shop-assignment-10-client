import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import ManageBook from './components/ManageBook/ManageBook';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <p>email: {loggedInUser.email}</p>
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
        <PrivateRoute path='/admin'>
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path='/checkout/:_id'>
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path='/manageBook'>
          <ManageBook></ManageBook>
        </Route>
        <PrivateRoute path='/order'>
          <Orders/>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
