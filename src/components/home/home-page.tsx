import React from "react";
import SectionWrapper from "@/components/wrapper/section-wrapper";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CertificateVerification from "@/components/home/certificate-verification";
import { Particles } from "@/components/ui/particles";
import { BlurFade } from "@/components/ui/blur-fade";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import Link from "next/link";

export function HomePage() {
  return (
    <SectionWrapper>
      <Meteors number={20} />
      <Particles
        className="absolute inset-0 z-0"
        quantity={30}
        ease={80}
        color="#dcdd10"
        refresh
      />
      {/* Mobile logo - visible only on small screens */}
      <div className="sm:hidden w-full flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Paradox Logo"
          width={120}
          height={120}
          className="w-20 h-20 object-contain"
        />
      </div>
      <Meteors number={20} />
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        ease={80}
        color="#180c72"
        refresh
      />
      <BlurFade delay={0.5}>
        <NeonGradientCard
          className="w-full max-w-6xl mx-2 sm:mx-4 lg:mx-6"
          borderSize={2}
          borderRadius={30}
          neonColors={{
            firstColor: "#dcdd10",
            secondColor: "#180c72",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 gap-4 lg:gap-8">
            <aside className="hidden sm:block lg:flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Paradox Logo"
                width={600}
                height={600}
                className="mx-auto w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
              />
            </aside>
            <article className="flex-1 w-full max-w-2xl">
              <CardHeader className="text-center px-2 sm:px-4">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-2 sm:gap-3 flex-wrap leading-tight">
                  <span className="block sm:hidden">Paradox</span>
                  <span className="block sm:hidden">Certificate</span>
                  <span className="block sm:hidden">Verification</span>
                  <span className="hidden sm:block">
                    Paradox Certificate Verification
                  </span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2">
                  Verify your Certificate!
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4 px-2 sm:px-4">
                <CertificateVerification />
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-3 mt-4 px-2 sm:px-4">
                <CardDescription className="text-xs sm:text-sm text-center">
                  Managed by Paradox Student Relations
                </CardDescription>
                <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
                  <Link
                    href="https://instagram.com/paradox_iitmadras"
                    target="_blank"
                  >
                    <Image
                      src="instagram.svg"
                      alt="Paradox Instagram"
                      width={30}
                      height={30}
                      className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <Link
                    href="https://youtube.com/@paradox_iitmadras"
                    target="_blank"
                  >
                    <Image
                      src="youtube.svg"
                      alt="Paradox YouTube"
                      width={30}
                      height={30}
                      className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/paradox-iitm"
                    target="_blank"
                  >
                    <Image
                      src="linkedin.svg"
                      alt="Paradox LinkedIn"
                      width={30}
                      height={30}
                      className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <Image
                    src="x.svg"
                    alt="Paradox X"
                    width={30}
                    height={30}
                    className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </CardFooter>
            </article>
          </div>
        </NeonGradientCard>
      </BlurFade>
    </SectionWrapper>
  );
}
