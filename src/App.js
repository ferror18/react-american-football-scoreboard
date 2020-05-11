//TODO: STEP 1 - Import the useState hook.
import React from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import { useState } from "react";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ homeScore, setHomeScore ] = useState(0);
  const [ awayScore, setAwayScore ] = useState(0);
  const touchdown = event => {
    if (event.target.classList.contains('homeButtons__touchdown')) {
      setHomeScore(homeScore + 7);
      console.log('Home team score touchdown!');
    }else{
      setAwayScore(awayScore + 7);
      console.log('Away team score touchdown!');
    }
    
  }
  const fieldGoal = event => {
    if (event.target.classList.contains('homeButtons__fieldGoal')) {
      setHomeScore(homeScore + 3);
      console.log('Home team score a fieldgoal!');
    }else{
      setAwayScore(awayScore + 3);
      console.log('Away team score a fieldgoal!');
    }
    
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal " onClick={fieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={touchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={fieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
