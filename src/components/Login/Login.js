import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import './Login.css';
import firebaseConfig from './fireBaseConfig';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          const {displayName, email} = user;
          const signInUser = {name: displayName, email}; 
          setLoggedInUser(signInUser);
          history.replace(from);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }

    return (
        <div className='cotainer'>
          <div className="login-section">
            <h3>Login</h3>
            <button onClick={handleSignIn}>Login With Google</button>
          </div>
        </div>
    );
};

export default Login;