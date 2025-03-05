export function ScoreBoard({ score }) {
  return (
    <div className="item-center flex justify-between gap-4 text-slate-800">
      <div className="bg-cross flex w-full flex-col items-center justify-center rounded-lg px-4 py-2">
        <span className="font-semibold">X</span>
        <span className="text-lg font-bold">{score.X}</span>
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-400 px-4 py-2">
        <span className="font-semibold">TIES</span>
        <span className="text-lg font-bold">{score.tie}</span>
      </div>
      <div className="bg-circle flex w-full flex-col items-center justify-center rounded-lg px-4 py-2">
        <span className="font-semibold">O</span>
        <span className="text-lg font-bold">{score.O}</span>
      </div>
    </div>
  );
}
