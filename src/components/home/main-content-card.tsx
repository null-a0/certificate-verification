import React from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { LogoSection } from "./logo-section";
import { PageHeader } from "./page-header";
import { SocialLinks } from "./social-links";
import CertificateVerification from "./certificate-verification";

export function MainContentCard() {
  return (
    <NeonGradientCard
      className="w-full max-w-6xl mx-2 sm:mx-4 lg:mx-6"
      borderSize={2}
      borderRadius={30}
      neonColors={{
        firstColor: "#d3b95f",
        secondColor: "#0a0a0a",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 gap-4 lg:gap-8">
        <LogoSection variant="desktop" />
        <article className="flex-1 w-full max-w-2xl">
          <PageHeader />
          <CardContent className="flex flex-col items-center gap-4 px-2 sm:px-4">
            <React.Suspense fallback={<div>Loading...</div>}>
              <CertificateVerification />
            </React.Suspense>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-3 mt-4 px-2 sm:px-4">
            <SocialLinks />
          </CardFooter>
        </article>
      </div>
    </NeonGradientCard>
  );
}
