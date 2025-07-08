import React from "react";
import SectionWrapper from "@/components/wrapper/section-wrapper";
import { BlurFade } from "@/components/ui/blur-fade";
import { BackgroundEffects } from "./background-effects";
import { LogoSection } from "./logo-section";
import { MainContentCard } from "./main-content-card";

export function HomePage() {
  return (
    <SectionWrapper>
      <BackgroundEffects />
      <LogoSection variant="mobile" />
      <BlurFade delay={0.5}>
        <MainContentCard />
      </BlurFade>
    </SectionWrapper>
  );
}
