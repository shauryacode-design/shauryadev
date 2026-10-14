import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaurya Ojha | AI & Frontend Developer",
  description: "Explore Shaurya Ojha's portfolio featuring AI-powered applications, frontend development, and projects like HireMind, PathPilot, and AI Complaint Management System. Applied AI and Data Science student at IIT Jodhpur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
