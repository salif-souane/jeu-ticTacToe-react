
import { useState } from 'react';
import './App.css';

function App() {
  const[xIsNext, setXIsNext] = useState(true);
  const[squares, setSquares] = useState(Array(9).fill(null));

  function handerClick(i){
    if(squares[i] || calculWinner(squares) ){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculWinner(squares);
    let statu;
    if(winner){
      statu = "winner : " + winner;
    }else{
      statu = "Next Player : " + (xIsNext? + "X" : "O");
    }
  

  function calculWinner(squares){
    let lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0; i < lines.length; i++){
      const[a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  return(
  <>
    <div className='statu'>{statu}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquaresClick={() => handerClick(0)}  />
      <Square value={squares[1]} onSquaresClick={() => handerClick(1)} />
      <Square value={squares[2]} onSquaresClick={() => handerClick(2)}  />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquaresClick={() => handerClick(3)}  />
      <Square value={squares[4]} onSquaresClick={() => handerClick(4)}  />
      <Square value={squares[5]} onSquaresClick={() => handerClick(5)}  />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquaresClick={() => handerClick(6)}  />
      <Square value={squares[7]} onSquaresClick={() => handerClick(7)}  />
      <Square value={squares[8]} onSquaresClick={() => handerClick(8)}  />
    </div>
</>
  );
}


function Square({value, onSquaresClick}){
  return <button className="square" onClick={onSquaresClick}>{value}</button> 
}







export default App;
