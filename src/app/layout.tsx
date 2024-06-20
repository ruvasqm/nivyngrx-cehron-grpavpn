import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Untitled UI",
  description:
    "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${inter.className} flex-column md:px-20`}>
          <Navbar />
          {children} <SpeedInsights />{" "}
        </body>
      </html>
    </SessionProvider>
  );
}

