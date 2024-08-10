import * as React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { albertSans, thesignature, unbounded } from "@/font";
import { Footer, Header, Content } from "@/layouts/main";
import { TanstackQueryProvider } from "@/providers/query";

export const metadata: Metadata = {
  title: "Pandooin Frontend Test",
  description: "Pandooin Frontend Test",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${thesignature.variable} ${unbounded.variable} ${albertSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background antialiased">
        <TanstackQueryProvider>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
