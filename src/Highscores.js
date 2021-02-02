import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Highscores.css";

var uniqid = require("uniqid");

const Highscores = (props) => {
  const [highScores, setHighScores] = useState([]);
  let scores = [];
  useEffect(() => {
    props.db
      .collection("highscores")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          scores.push({
            name: doc.data().name,
            score: doc.data().score,
          });
        });
        scores.sort((a, b) => {
          return a.score - b.score;
        });
        setHighScores(scores);
      });
  }, []);
  return (
    <div id="highscores">
      <h2 id="highscorestitle">High Scores</h2>
      {highScores.slice(0, 9).map((i) => (
        <div key={uniqid()} className="highscore">
          {i.name} {i.score}
        </div>
      ))}
      <NavLink to="/wheres-waldo/">
        <h2 id="gobacklink">Go Back</h2>
      </NavLink>
    </div>
  );
};

export default Highscores;
