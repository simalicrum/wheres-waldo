import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Search = (props) => {
  const [waldoFound, setWaldoFound] = useState(false);
  const [odlawFound, setOdlawFound] = useState(false);
  const [wizardFound, setWizardFound] = useState(false);
  const [waldoButtonClass, setWaldoButtonClass] = useState("shown");
  const [odlawButtonClass, setOdlawButtonClass] = useState("shown");
  const [wizardButtonClass, setWizardButtonClass] = useState("shown");
  const [waldoTitleClass, setWaldoTitleClass] = useState("name");
  const [odlawTitleClass, setOdlawTitleClass] = useState("name");
  const [wizardTitleClass, setWizardTitleClass] = useState("name ");
  const [waldoPosition, setWaldoPosition] = useState({});
  const [odlawPosition, setOdlawPosition] = useState({});
  const [wizardPosition, setWizardPosition] = useState({});
  useEffect(() => {
    props.db
      .collection("solutions")
      .doc("Waldo")
      .get()
      .then((querySnapshot) => {
        setWaldoPosition({
          person: querySnapshot.data().person,
          xStart: querySnapshot.data().xStart,
          yStart: querySnapshot.data().yStart,
          xEnd: querySnapshot.data().xEnd,
          yEnd: querySnapshot.data().yEnd,
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    props.db
      .collection("solutions")
      .doc("Odlaw")
      .get()
      .then((querySnapshot) => {
        setOdlawPosition({
          person: querySnapshot.data().person,
          xStart: querySnapshot.data().xStart,
          yStart: querySnapshot.data().yStart,
          xEnd: querySnapshot.data().xEnd,
          yEnd: querySnapshot.data().yEnd,
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    props.db
      .collection("solutions")
      .doc("Wizard")
      .get()
      .then((querySnapshot) => {
        setWizardPosition({
          person: querySnapshot.data().person,
          xStart: querySnapshot.data().xStart,
          yStart: querySnapshot.data().yStart,
          xEnd: querySnapshot.data().xEnd,
          yEnd: querySnapshot.data().yEnd,
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  const [searchBoxPosition, setSearchBoxPosition] = useState({
    left: -100,
    top: -100,
  });
  const [seconds, setSeconds] = useState(0);
  const placeBox = (e) => {
    const clickPosition = getClickPosition(e);
    setSearchBoxPosition({
      left: clickPosition.x - 21,
      top: clickPosition.y - 21,
    });
  };
  const getClickPosition = (e) => {
    const elementPosition = document
      .getElementById("picture")
      .getBoundingClientRect();
    return {
      x: e.clientX - elementPosition.x,
      y: e.clientY - elementPosition.y,
    };
  };
  const handleHereButton = (position) => {
    if (
      searchBoxPosition.left + 21 > position.xStart &&
      searchBoxPosition.left + 21 < position.xEnd &&
      searchBoxPosition.top + 21 > position.yStart &&
      searchBoxPosition.top + 21 < position.yEnd
    ) {
      switch (position.person) {
        case "Waldo":
          setWaldoFound(true);
          setWaldoButtonClass("hidden");
          setWaldoTitleClass("name linethrough");
          break;
        case "Odlaw":
          setOdlawFound(true);
          setOdlawButtonClass("hidden");
          setOdlawTitleClass("name linethrough");
          break;
        case "Wizard":
          setWizardFound(true);
          setWizardButtonClass("hidden");
          setWizardTitleClass("name linethrough");
          break;
        default:
      }
      setSearchBoxPosition({
        left: -100,
        top: -100,
      });
    }
  };
  const resetGame = () => {
    setWaldoButtonClass("shown");
    setOdlawButtonClass("shown");
    setWizardButtonClass("shown");
    setWaldoTitleClass("name");
    setOdlawTitleClass("name");
    setWizardTitleClass("name");
    setWaldoFound(false);
    setOdlawFound(false);
    setWizardFound(false);
    setSearchBoxPosition({ left: -100, top: -100 });
    setSeconds(0);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  useEffect(() => {
    if (waldoFound && odlawFound && wizardFound) {
      const now = seconds;
      alert("You found everyone in " + now + " seconds!");
      const scoreName = prompt(
        "Enter your name to record your score: ",
        "Anonymous"
      );
      props.db.collection("highscores").add({ name: scoreName, score: now });
      resetGame();
    }
  }, [waldoFound, odlawFound, wizardFound, seconds]);
  return (
    <div id="app">
      <h1>Where's:</h1>
      <h1 id="names">
        <div className={waldoTitleClass} id="waldo-title">
          Waldo
        </div>{" "}
        <div className={odlawTitleClass} id="odlaw-title">
          Odlaw
        </div>{" "}
        <div className={wizardTitleClass} id="wizard-title">
          Wizard
        </div>
      </h1>
      <div id="frame">
        <div id="search-box-frame" style={searchBoxPosition}>
          <div id="search-box" />
          <button
            id="waldo-button"
            className={waldoButtonClass}
            onClick={() => handleHereButton(waldoPosition)}
          >
            Waldo
          </button>
          <button
            id="odlaw-button"
            className={odlawButtonClass}
            onClick={() => handleHereButton(odlawPosition)}
          >
            Odlaw
          </button>
          <button
            id="wizard-button"
            className={wizardButtonClass}
            onClick={() => handleHereButton(wizardPosition)}
          >
            Wizard
          </button>
        </div>
        <img
          id="picture"
          onClick={(e) => placeBox(e)}
          src="/wheres-waldo/waldo.jpg"
          alt="Where's Waldo?"
        />
      </div>
      <h2 onClick={() => resetGame()}>Start Again</h2>
      <NavLink to="/highscores">
        <h2>High Scores</h2>
      </NavLink>
    </div>
  );
};

export default Search;
