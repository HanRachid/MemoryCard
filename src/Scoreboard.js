import React, { useEffect, useState } from "react";
import "./Scoreboard.css";
const Scoreboard = (props) => {
  const resetGame = () => {
    props.resetscore(0);
    props.setgameover(false);
    props.alreadypicked([]);
  };
  return (
    <div className="ScoreBorder">
      <div>Game has ended!</div>
      <div id="score">
        Score : {props.score} Personal Best : {props.best}
      </div>
      <div>
        <input
          type="button"
          value="Replay"
          id="replaybutton"
          onClick={resetGame}
        />
      </div>
    </div>
  );
};

export default Scoreboard;
