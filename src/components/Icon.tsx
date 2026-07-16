const PATHS: Record<string, React.ReactNode> = {
  sonrisa: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" strokeLinecap="round" />
      <path d="M9 9h.01M15 9h.01" strokeLinecap="round" />
    </>
  ),
  cafe: (
    <>
      <path d="M5 9h11v5a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 6c0-1 .7-1.3.7-2.3M11.5 6c0-1 .7-1.3.7-2.3" strokeLinecap="round" />
    </>
  ),
  mapa: (
    <>
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  libro: (
    <>
      <path d="M12 6.5c-1.5-1.2-4-2-7-1.5v13c3-.5 5.5.3 7 1.5 1.5-1.2 4-2 7-1.5v-13c-3-.5-5.5.3-7 1.5Z" strokeLinejoin="round" />
      <path d="M12 6.5v13" />
    </>
  ),
  gato: (
    <>
      <path d="M6 9 4 4l4 2.5" strokeLinejoin="round" />
      <path d="M18 9l2-5-4 2.5" strokeLinejoin="round" />
      <path d="M6 9c0-2.5 2.5-4 6-4s6 1.5 6 4v4c0 3.5-2.7 6-6 6s-6-2.5-6-6V9Z" />
      <path d="M9.5 12h.01M14.5 12h.01" strokeLinecap="round" />
    </>
  ),
  estrella: (
    <path d="M12 3l2.6 5.8 6.2.6-4.7 4.2 1.4 6.1L12 16.9 6.5 19.7l1.4-6.1-4.7-4.2 6.2-.6L12 3Z" strokeLinejoin="round" />
  ),
  corazon: (
    <path d="M12 20s-7.5-4.9-9.7-9.6C.7 6.7 3 3.5 6.4 3.5c2 0 3.6 1 5.6 3.3 2-2.3 3.6-3.3 5.6-3.3 3.4 0 5.7 3.2 4.1 6.9C19.5 15.1 12 20 12 20Z" strokeLinejoin="round" />
  ),
};

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const path = PATHS[name] ?? PATHS.corazon;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
      className={className}
    >
      {path}
    </svg>
  );
}
