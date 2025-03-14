import { Geist, Geist_Mono as GeistMono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fonts = `${geistSans.variable} ${geistMono.variable}`;
