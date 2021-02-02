import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Search from "./Search";
import Highscores from "./Highscores";

// Initialize Firebase

import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "wheres-waldo-2710e.firebaseapp.com",
  databaseURL: "https://wheres-waldo-2710e.firebaseio.com",
  projectId: "wheres-waldo-2710e",
  storageBucket: "wheres-waldo-2710e.appspot.com",
  messagingSenderId: "434710063892",
  appId: "1:434710063892:web:787688c00d6fead860f001",
  measurementId: "G-C5E8XGBPL1",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/wheres-waldo" render={() => <Search db={db} />} />
          <Route
            exact
            path="/highscores"
            render={() => <Highscores db={db} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
