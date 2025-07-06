import { HomePage } from "@/components/home/home-page";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata = {
  title: "Certificate Verification",
  description: "Verify your certificates with Paradox",
};

export default function Home() {
  return (
    <div>
      <div className="flex z-10 min-h-screen w-full flex-col items-center justify-center">
        <HomePage />
        <BackgroundBeams />
      </div>
    </div>
  );
}
