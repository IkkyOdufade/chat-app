import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { firestore } from 'firebase';
const firebase = require('firebase');
require('firebase/firestore');


var firebaseConfig = {
    apiKey: "AIzaSyDfTrON9Cvo3o-AI0OQo43Ts_MrbegLybk",
    authDomain: "revolt-7d9f1.firebaseapp.com",
    databaseURL: "https://revolt-7d9f1.firebaseio.com",
    projectId: "revolt-7d9f1",
    storageBucket: "revolt-7d9f1.appspot.com",
    messagingSenderId: "1007059462819",
    appId: "1:1007059462819:web:10bb37feded54c9ba96d16",
    measurementId: "G-SRK42MY7D3"
  }

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
