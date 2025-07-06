"use client";

import { useState } from "react";

export function useLightbox() {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;
  const clickHandler = (i: number) => setIndex(i);
  const close = () => setIndex(-1);
  const carousel = {
    padding: 100,
  };

  const controller = {
    closeOnBackdropClick: true,
  }

  return {
    index,
    open,
    clickHandler,
    close,
    carousel,
    controller,
  }
}
