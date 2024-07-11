import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoards = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const [ playerName, setPlayerName] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  let gameBoard = [...initialGameBoards.map((arr) => [...arr])];

  for(const turn of gameTurns){
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSystem = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSystem = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSystem = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSystem && firstSquareSystem === secondSquareSystem && firstSquareSystem == thirdSquareSystem){
      winner = playerName[firstSquareSystem];
    }
  }

  function handleRematch(){
    setGameTurns([]);
  }

  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [ 
      { square: 
        { col: colIndex, row: rowIndex }, 
        player: currentPlayer }, 
        ...prevTurns, 
      ];
      return updatedTurns;
    });
  }

  function handlePlayerName(symbol, newName){
    setPlayerName((prevName) => {
      return {
        ...prevName,
        [symbol]: newName
      }
    })
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && <GameOver btnRematch={handleRematch} winner={winner} />}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </menu>
  );
}

export default App
