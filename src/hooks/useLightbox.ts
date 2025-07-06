"use client";

import { useState } from "react";

export function useLightbox() {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;
  const clickHandler = (i: number) => setIndex(i);
  const close = () => setIndex(-1);

  return {
    index,
    open,
    clickHandler,
    close,
  }
}
