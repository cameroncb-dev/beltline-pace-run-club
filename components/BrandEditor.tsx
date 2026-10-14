"use client";

import { useEffect, useSyncExternalStore } from "react";
import { buttonSwatches } from "@/lib/content";
import { buttonClass } from "@/components/Button";

const storageKey = "beltline-sunrise";
const changeEvent = "beltline-sunrise-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(changeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(changeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readColor() {
  return window.localStorage.getItem(storageKey) ?? buttonSwatches[0].hex;
}

export function BrandEditor() {
  const current = useSyncExternalStore(
    subscribe,
    readColor,
    () => buttonSwatches[0].hex,
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--sunrise", current);
  }, [current]);

  function apply(hex: string) {
    window.localStorage.setItem(storageKey, hex);
    document.documentElement.style.setProperty("--sunrise", hex);
    window.dispatchEvent(new Event(changeEvent));
  }

  return (
    <div className="bg-paper px-5 py-6">
      <h3 className="text-3xl leading-none">Live edit</h3>
      <p className="mt-3 text-lg">
        These swatches change the shared Sunrise color. Buttons and markers on
        every page follow it. The label stays Asphalt so the 4.5 to 1 rule holds.
        White text is not offered.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {buttonSwatches.map((swatch) => (
          <button
            key={swatch.hex}
            type="button"
            onClick={() => apply(swatch.hex)}
            aria-pressed={current.toLowerCase() === swatch.hex}
            className="min-h-12 border border-asphalt bg-paper px-4 text-left text-base text-asphalt"
          >
            <span
              className="mr-2 inline-block h-4 w-4 align-middle"
              style={{ backgroundColor: swatch.hex }}
              aria-hidden="true"
            />
            {swatch.name}
          </button>
        ))}
      </div>
      <p className="mt-4 text-base">Current shared color: {current.toUpperCase()}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <span className={buttonClass.primary}>Join a Run</span>
        <span className="inline-flex min-h-12 items-center bg-sunrise px-4 font-display text-lg leading-none text-asphalt">
          Marker
        </span>
      </div>
      <p className="mt-4 text-base">
        Open Home or Weekly runs after a change. The same color is already there.
      </p>
    </div>
  );
}
