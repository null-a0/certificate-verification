import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/wrapper/theme-provider";


export const metadata: Metadata = {
  title: "Certificate Verification",
  description: "Verify your certificates with Paradox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-full w-full overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
