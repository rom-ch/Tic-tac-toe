export function Circle({ className }) {
  return (
    <svg
      className={`${className} stroke-circle`}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="37.5" fill="transparent" strokeWidth="25" />
    </svg>
  );
}
