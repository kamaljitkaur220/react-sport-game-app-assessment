import React from 'react';
import './App.css';
import Game from './components/game/Game';
import Russiaville from './assets/images/raccoon.png';
import Sheridan from './assets/images/squirrel.png';
import Burlington from './assets/images/bunny.png';
import Hammond from './assets/images/hound.png';

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: Russiaville,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: Sheridan,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: Burlington,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: Hammond,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;