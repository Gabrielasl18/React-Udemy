// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from "react";


// data
import {wordList} from "./data/words"; 

// components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

  const stages = [
    {id: 1, name:"start"},
    {id: 2, name:"game"},
    {id: 3, name:"end"}
  ]

function App() {

  const[gameStage, setGameStage] = useState(stages[0].name);


  return (
    <div className="App">
      <header className="app-secret">
        {gameStage === 'start' && <StartScreen />}
        {gameStage === 'game' && <Game />}
        {gameStage === 'end' && <GameOver />}
      </header>
    </div>
  );
}

export default App;
