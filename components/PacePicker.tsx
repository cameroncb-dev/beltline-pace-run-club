"use client";

import { useState } from "react";
import { paceGroups } from "@/lib/content";

export function PacePicker() {
  const [selected, setSelected] = useState<string>(paceGroups[0].name);
  const match = paceGroups.find((group) => group.name === selected) ?? paceGroups[0];

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {paceGroups.map((group) => {
          const pressed = group.name === selected;
          return (
            <button
              key={group.name}
              type="button"
              aria-pressed={pressed}
              onClick={() => setSelected(group.name)}
              className={`min-h-14 px-4 py-3 text-left font-display text-xl leading-tight ${
                pressed ? "bg-sunrise text-asphalt" : "bg-paper text-asphalt"
              }`}
            >
              {group.prompt}
            </button>
          );
        })}
      </div>
      <div className="mt-4 bg-paper px-5 py-5" aria-live="polite">
        <p className="font-display text-3xl leading-none">{match.name}</p>
        <p className="mt-2 text-lg">{match.detail}</p>
      </div>
    </div>
  );
}
