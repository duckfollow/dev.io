import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
        <App />
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
