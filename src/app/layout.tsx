import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluxypy - Intelligent Digital Solutions for Modern Businesses",
  description:
    "Fluxypy delivers AI solutions, web development, automation systems, SaaS products, and custom software development for startups and enterprises.",
  keywords: [
    "AI solutions",
    "web development",
    "SaaS development",
    "business automation",
    "custom software",
    "startup tech partner",
  ],
  openGraph: {
    title: "Fluxypy - Intelligent Digital Solutions",
    description:
      "AI-powered web development, automation, and SaaS products for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
