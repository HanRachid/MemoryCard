import React, { useEffect, useState } from "react";
import "./App.css";
//characters import
import Alicent from "./images/Alicent Hightower.png";
import Corlys from "./images/Corlys Velaryon.png";
import Daemon from "./images/Daemon Targaryen.png";
import Viserys from "./images/King Viserys.png";
import Mysaria from "./images/Mysaria.png";
import Otto from "./images/Otto Hightower.png";
import Rhaenyra from "./images/Rhaenyra Targaryen.png";
import Rhaenys from "./images/Rhaenys Velaryon.png";
import Scoreboard from "./Scoreboard";

//end chracters import
function randrange(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const [currentScore, setScore] = useState(0);
  const [bestScore, setBest] = useState(0);
  const [characters, setRandCharacters] = useState([
    Alicent,
    Corlys,
    Daemon,
    Viserys,
    Mysaria,
    Otto,
    Rhaenyra,
    Rhaenys,
  ]);
  const [gameisOver, setgameisOver] = useState(false);
  const [alreadyPicked, setAlreadyPicked] = useState([]);

  function play(event) {
    const tempCharacters = [];
    const tempCharactersbis = characters;
    while (tempCharacters.length < 8) {
      const randNumber = randrange(tempCharactersbis.length);
      const randCharacter = tempCharactersbis[randNumber];
      tempCharacters.push(randCharacter);
      tempCharactersbis.splice(randNumber, 1);
    }
    setRandCharacters(tempCharacters);
    console.log(event.target.src);
    console.log(alreadyPicked);
    if (alreadyPicked.includes(event.target.src)) {
      if (currentScore > bestScore) {
        setBest(currentScore);
      }
      setgameisOver(true);
    } else {
      setAlreadyPicked(alreadyPicked.concat(event.target.src));
      setScore(currentScore + 1);
      if (currentScore > bestScore) {
        setBest(currentScore);
      }
    }
  }
  if (!gameisOver) {
    return (
      <div className="maincontainer">
        <div className="maingame">
          {characters.map((element) => {
            return (
              <div className="characters">
                <div>
                  <img src={element} alt="" srcset="" onClick={play} />
                </div>
              </div>
            );
          })}
        </div>
        <div id="mainscore">score : {currentScore}</div>
      </div>
    );
  } else {
    return (
      <div className="scoreboardmain">
        <Scoreboard
          score={currentScore}
          best={bestScore}
          resetscore={setScore}
          setgameover={setgameisOver}
          alreadypicked={setAlreadyPicked}
        />
      </div>
    );
  }
};

export default App;
