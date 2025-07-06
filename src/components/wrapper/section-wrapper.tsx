import React from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { cn } from "@/lib/utils";

export default function SectionWrapper({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 items-center w-full justify-center min-h-screen relative p-4 sm:p-6",
        className
      )}
    >
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      {children}
    </section>
  );
}
