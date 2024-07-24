import type { Metadata } from "next";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

const GTMaru = localfont({
  src: [
    {
      path: "../public/fonts/GTMaruMedium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-gt",
});

export const metadata: Metadata = {
  title: "Migaku - The fastest way to really learn a language",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GTMaru.variable} ${inter.className}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
