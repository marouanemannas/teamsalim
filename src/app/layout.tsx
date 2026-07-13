import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Salim — Palestra di Arti Marziali a Vergato",
  description:
    "Team Salim: MMA, Muay Thai, K-1 e Kickboxing a Vergato (Bologna). Allenati con noi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-background font-body text-foreground antialiased">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
