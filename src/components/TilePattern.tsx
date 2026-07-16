type TilePatternProps = {
  className?: string;
  tone?: "azulejo" | "terracota" | "salvia";
};

const TONES: Record<NonNullable<TilePatternProps["tone"]>, string> = {
  azulejo: "#2d6b74",
  terracota: "#c1633f",
  salvia: "#7c9473",
};

/**
 * Patrón geométrico propio inspirado en azulejería, hecho a mano con SVG.
 * No reproduce ningún diseño de marca ni motivo real: es una retícula de
 * rombos y cuartos de círculo, genérica y pensada solo como textura tenue.
 */
export function TilePattern({ className = "", tone = "azulejo" }: TilePatternProps) {
  const color = TONES[tone];
  const patternId = `tile-pattern-${tone}`;

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={patternId}
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <rect width="64" height="64" fill="none" />
          <path
            d="M32 0 L64 32 L32 64 L0 32 Z"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="16" fill="none" stroke={color} strokeWidth="1" />
          <circle cx="64" cy="0" r="16" fill="none" stroke={color} strokeWidth="1" />
          <circle cx="0" cy="64" r="16" fill="none" stroke={color} strokeWidth="1" />
          <circle cx="64" cy="64" r="16" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
