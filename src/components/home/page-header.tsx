import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PageHeader() {
  return (
    <CardHeader className="text-center px-2 sm:px-4">
      <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-2 sm:gap-3 flex-wrap leading-tight">
        <span className="block sm:hidden">Saranda</span>
        <span className="block sm:hidden">Certificate</span>
        <span className="block sm:hidden">Verification</span>
        <span className="hidden sm:block">
          Saranda House Certificate Verification
        </span>
      </CardTitle>
      <CardDescription className="text-sm sm:text-base mt-2">
        Verify your Certificate!
      </CardDescription>
    </CardHeader>
  );
}
