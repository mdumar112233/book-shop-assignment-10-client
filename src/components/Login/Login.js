import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import './Login.css';
import firebaseConfig from './fireBaseConfig';

// if(firebase.apps.length === 0){
// }
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          const {displayName, email} = user;
          const signInUser = {name: displayName, email}; 
          setLoggedInUser(signInUser);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }

    return (
        <div>
            <h3>login</h3>
            <button onClick={handleSignIn}>Login With Google</button>
        </div>
    );
};

export default Login;