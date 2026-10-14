"use client";

import { useEffect } from "react";

const storageKey = "beltline-sunrise";

export function BrandColor() {
  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) document.documentElement.style.setProperty("--sunrise", saved);
  }, []);
  return null;
}
