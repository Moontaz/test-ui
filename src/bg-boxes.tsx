"use client";
import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import { cn } from "./utils/cn";
import { SignupFormDemo } from "./form";

export function BackgroundBoxesDemo() {
  return (
    <div className=" relative w-full overflow-hidden bg-hakuji flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-hakuji z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <SignupFormDemo />
    </div>
  );
}
