import React from "react";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import { TypewriterEffectDemo } from "./typewritter";
import { BackgroundBeamsDemo } from "./bg-beams";
import { SpotlightPreview } from "./bg-spotlight";
import { WavyBackgroundDemo } from "./bg-wavy";
import { BackgroundBoxesDemo } from "./bg-boxes";
import { LampDemo } from "./lamp";

function App() {
  return (
    <main>
      <div className="grid grid-cols-1">
        {/* <LampDemo /> */}
        <WavyBackgroundDemo />
        <BackgroundBoxesDemo />
        {/* <SignupFormDemo /> */}

        {/* <BackgroundBeamsDemo /> */}
        {/* <TypewriterEffectDemo /> */}
      </div>
    </main>
  );
}

export default App;
