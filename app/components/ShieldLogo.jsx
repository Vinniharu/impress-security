export default function ShieldLogo({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E8B3D" />
          <stop offset="100%" stopColor="#1F5F2A" />
        </linearGradient>
      </defs>
      <path
        d="M24 2 L42 9 V24 C42 34 34 42 24 46 C14 42 6 34 6 24 V9 Z"
        fill="url(#shieldGrad)"
        stroke="#9ED93A"
        strokeWidth="1.5"
      />
      <path
        d="M16 24 L22 30 L33 18"
        stroke="#9ED93A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
