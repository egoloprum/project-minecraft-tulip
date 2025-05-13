import type { Metadata } from "next";
import { Bangers } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Minecraft tulip",
  description: "3D minecraft tulip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} antialiased bg-[#2d2f33]`}>
        {children}
      </body>
    </html>
  );
}
