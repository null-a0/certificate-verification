import React from "react";
import { CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function SocialLinks() {
  return (
    <>
      <CardDescription className="text-xs sm:text-sm text-center">
        Managed by Paradox Student Relations
      </CardDescription>
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        <Link
          href="https://www.instagram.com/iitm_saranda/"
          target="_blank"
        >
          <Image
            src="instagram.svg"
            alt="Saranda House Instagram"
            width={30}
            height={30}
            className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        <Link
          href="https://youtube.com/@saranda_iitm?feature=shared"
          target="_blank"
        >
          <Image
            src="youtube.svg"
            alt="Saranda House YouTube"
            width={30}
            height={30}
            className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/saranda-house/"
          target="_blank"
        >
          <Image
            src="linkedin.svg"
            alt="Saranda House LinkedIn"
            width={30}
            height={30}
            className="inline-block h-6 w-6 sm:h-8 sm:w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
