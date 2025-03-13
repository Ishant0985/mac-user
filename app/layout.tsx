import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "A modern Next.js template for Startup and SaaS websites",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Startup",
    "SaaS",
    "Template",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
