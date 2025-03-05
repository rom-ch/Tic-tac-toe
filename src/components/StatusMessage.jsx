import { Circle } from "./Circle";
import { Xmark } from "./Xmark";

export function StatusMessage({ isWinner, resetBoard, nextRound }) {
  if (!isWinner) return null;

  return (
    <div className="absolute top-1/2 flex h-52 w-full -translate-y-1/2 flex-col items-center justify-center gap-6 bg-gray-400">
      <h2 className="flex items-center gap-4">
        {isWinner === "X" && <Xmark className="size-12" />}
        {isWinner === "O" && <Circle className="size-12" />}

        <span className="text-3xl font-bold">
          {isWinner === "tie" ? "TIE" : "TAKES THE ROUND!"}
        </span>
      </h2>
      <div className="flex items-center gap-4 font-semibold">
        <button
          onClick={resetBoard}
          className="bg-turn shadow-turn cursor-pointer rounded-lg p-2 text-slate-800"
        >
          QUIT
        </button>
        <button
          onClick={nextRound}
          className="bg-tile shadow-tile cursor-pointer rounded-lg p-2 text-slate-800"
        >
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}
