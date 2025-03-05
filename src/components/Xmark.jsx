export function Xmark({ className }) {
  return (
    <svg
      className={`${className} fill-cross`}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 30 C -10 10, 10 -10, 30 10 L30 10 L50 30 L70 10 C 90 -10, 110 10, 90 30 L70 50 L90 70 C 110 90, 90 110, 70 90 L50 70 L30 90 C 10 110, -10 90, 10 70 L30 50 Z" />
    </svg>
  );
}
