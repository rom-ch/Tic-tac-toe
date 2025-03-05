import { useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";
import { Circle } from "./components/Circle";
import { ScoreBoard } from "./components/ScoreBoard";
import { StatusMessage } from "./components/StatusMessage";
import { Tile } from "./components/Tile";
import { Xmark } from "./components/Xmark";
import { useStorage } from "./hooks/useStorage";

const INITIAL_BOARD = new Array(9).fill(null);
const INITIAL_SCORE = { X: 0, O: 0, tie: 0 };
const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [tiles, setTiles] = useState(INITIAL_BOARD);
  const [isXTurn, setIsXTurn] = useState(true);
  const [isWinner, setIsWinner] = useState(null);
  const [score, setScore] = useStorage("score", INITIAL_SCORE);

  function handleClickTile(index) {
    if (tiles[index] !== null) return;

    const newTiles = [...tiles];

    newTiles[index] = isXTurn ? (
      <Xmark className="size-16" />
    ) : (
      <Circle className="size-16" />
    );

    const winner = checkWinner(newTiles);
    if (winner) {
      setIsWinner(winner);
      return;
    }

    if (!winner && !newTiles.includes(null)) {
      setIsWinner("tie");
      setScore((prev) => ({
        ...prev,
        tie: prev.tie + 1,
      }));
    }

    setTiles(newTiles);
    setIsXTurn((prev) => !prev);
  }

  function checkWinner(board) {
    for (const condition of WIN_CONDITIONS) {
      const [a, b, c] = condition;
      if (
        board[a] &&
        board[a].type === board[b]?.type &&
        board[a].type === board[c]?.type
      ) {
        const winner = board[a].type === Xmark ? "X" : "O";
        setScore((prev) => ({
          ...prev,
          [winner]: prev[winner] + 1,
        }));

        return winner;
      }
    }
    return null;
  }

  function resetBoard() {
    setTiles(INITIAL_BOARD);
    setScore(INITIAL_SCORE);
    setIsXTurn(true);
    setIsWinner(null);
  }

  function nextRound() {
    setTiles(INITIAL_BOARD);
    setIsWinner(null);
    setIsXTurn((prev) => !prev);
  }

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-gray-400 uppercase">
        Tic Tac Toe
      </h1>
      <div className="flex w-full max-w-xs flex-col gap-6 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <Xmark className="size-8" />
            <Circle className="size-8" />
          </div>
          <div className="bg-turn shadow-turn flex items-center gap-2 rounded-lg px-4 py-2">
            {isXTurn ? (
              <Xmark className="size-4" />
            ) : (
              <Circle className="size-4" />
            )}
            <span className="font-bold text-slate-800">TURN</span>
          </div>
          <button
            onClick={resetBoard}
            className="shadow-turn bg-turn cursor-pointer rounded-lg p-2"
          >
            <FaArrowRotateRight className="size-6 text-slate-800" />
          </button>
        </div>

        <div className="grid aspect-square grid-cols-3 gap-4">
          {tiles.map((tile, index) => (
            <Tile
              key={index}
              onClick={() => handleClickTile(index)}
              tile={tile}
            />
          ))}
        </div>
        <ScoreBoard score={score} />
      </div>
      <StatusMessage
        isWinner={isWinner}
        resetBoard={resetBoard}
        nextRound={nextRound}
      />
    </>
  );
}

export default App;
