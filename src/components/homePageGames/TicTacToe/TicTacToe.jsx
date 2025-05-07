import React, { useState } from 'react';
import './TicTacToe.css';
import Square from './Square';

const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);

  function handleClick(i) {
    if (currentSquares[i] || winner) return;

    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  const moves = history.map((squares, move) => {
    const desc = move === 0 ? 'Go to game start' : `Go to move #${move}`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="areaContainer">
      <div className="TTTLeft both">
        <div className="boardContainer">
          {currentSquares.map((value, i) => (
            <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
          ))}
        </div>
      </div>

      <div className="TTTRight both">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
