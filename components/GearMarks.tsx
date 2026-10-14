export function ShirtMark() {
  return (
    <svg viewBox="0 0 160 150" className="mx-auto h-40 w-40" aria-hidden="true">
      <path
        d="M46 22 L80 44 L114 22 L146 46 L124 66 L124 136 L36 136 L36 66 L14 46 Z"
        fill="#FFC93C"
      />
      <path d="M66 24 L80 40 L94 24" fill="none" stroke="#1E2A32" strokeWidth="4" />
    </svg>
  );
}

export function HatMark() {
  return (
    <svg viewBox="0 0 160 150" className="mx-auto h-40 w-40" aria-hidden="true">
      <ellipse cx="80" cy="112" rx="62" ry="14" fill="#1E2A32" />
      <path d="M38 108 Q38 36 80 36 Q122 36 122 108 Z" fill="#FFC93C" />
      <path d="M80 48 V108" stroke="#1E2A32" strokeWidth="3" />
      <circle cx="80" cy="46" r="6" fill="#1E2A32" />
    </svg>
  );
}
