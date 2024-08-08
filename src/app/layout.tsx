import type { Metadata } from "next";
import "./globals.css";
import { albertSans, thesignature, unbounded } from "@/fonts";

export const metadata: Metadata = {
  title: "Pandooin Frontend Test",
  description: "Pandooin Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${thesignature.variable} ${unbounded.variable} ${albertSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
