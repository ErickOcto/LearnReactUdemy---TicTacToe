export default function GameOver({winner, btnRematch}) {
    
let theWinner;
if(winner){
    theWinner = <p>{winner} won!</p>;
}else{
    theWinner = <p>DRAW!</p>;
}

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {theWinner}
      <p>
        <button onClick={btnRematch}>Rematch!</button>
      </p>
    </div>
  );
}
