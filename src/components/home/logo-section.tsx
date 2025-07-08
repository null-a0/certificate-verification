import React from "react";
import Image from "next/image";

interface LogoSectionProps {
  variant: "mobile" | "desktop";
}

export function LogoSection({ variant }: LogoSectionProps) {
  if (variant === "mobile") {
    return (
      <div className="sm:hidden w-full flex justify-center mb-6">
        <Image
          src="logo.svg"
          alt="Paradox Logo"
          width={120}
          height={120}
          className="w-20 h-20 object-contain"
        />
      </div>
    );
  }

  return (
    <aside className="hidden sm:block lg:flex-shrink-0">
      <Image
        src="logo.svg"
        alt="Paradox Logo"
        width={600}
        height={600}
        className="mx-auto w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
      />
    </aside>
  );
}
