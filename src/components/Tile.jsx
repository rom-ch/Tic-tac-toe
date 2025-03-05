export function Tile({ tile, onClick }) {
  return (
    <button
      className="bg-tile shadow-tile flex aspect-square cursor-pointer items-center justify-center rounded-xl"
      onClick={onClick}
    >
      {tile}
    </button>
  );
}
