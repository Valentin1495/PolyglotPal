import { useState } from 'react';
import './tic-tac-toe.css';

export default function TicTacToe() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState<boolean>(false);
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (idx: number) => {
    setIsXTurn((prev) => {
      setSquares((prev) => {
        const copiedSquares = [...prev];
        copiedSquares[idx] = isXTurn ? 'X' : 'O';
        for (const pattern of winningPatterns) {
          if (
            copiedSquares[pattern[0]] &&
            copiedSquares[pattern[0]] === copiedSquares[pattern[1]] &&
            copiedSquares[pattern[0]] === copiedSquares[pattern[2]]
          ) {
            if (isXTurn) {
              setWinner('X');
            } else {
              setWinner('O');
            }
            break;
          }
        }
        return copiedSquares;
      });
      return !prev;
    });
  };

  let isFinal = true;
  for (const square of squares) {
    if (!square) isFinal = false;
  }

  const restart = () => {
    setSquares(Array(9).fill(''));
    setIsXTurn(false);
    setWinner(null);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          aspectRatio: '1 / 1',
          width: '30%',
          border: '1px solid black',
        }}
      >
        {squares.map((square, idx) => (
          <button
            key={idx}
            onClick={() => !winner && !squares[idx] && handleClick(idx)}
            className='player-btn'
            disabled={!!squares[idx]}
          >
            {square}
          </button>
        ))}
      </div>
      <p
        style={{
          fontSize: '1.5rem',
        }}
      >
        {winner
          ? `Winner is ${winner}!`
          : isFinal
          ? "It's a draw"
          : `Next player is ${isXTurn ? 'X' : 'O'}`}
      </p>
      <button
        onClick={restart}
        style={{
          cursor: 'pointer',
        }}
      >
        Restart
      </button>
    </div>
  );
}
