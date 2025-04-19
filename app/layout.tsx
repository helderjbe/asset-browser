import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { RequestButton } from "@/components/RequestButton";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Library | Asset Browser",
  description: "Browse for assets needed to report and present analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[var(--color-bg)] text-slate-900`}
      >
        <div className="fixed top-4 right-4 z-40">
          <RequestButton />
        </div>

        {children}
      </body>
    </html>
  );
}
