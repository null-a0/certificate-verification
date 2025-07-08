import React from "react";
import { Particles } from "@/components/ui/particles";
import { Meteors } from "@/components/ui/meteors";

export function BackgroundEffects() {
  return (
    <>
      <Meteors number={20} />
      <Particles
        className="absolute inset-0 z-0"
        quantity={30}
        ease={80}
        color="#d3b95f"
        refresh
      />
      <Meteors number={20} />
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        ease={80}
        color="#0a0a0a"
        refresh
      />
    </>
  );
}
