import type { Metadata } from "next";
import "./globals.css";
import { albertSans, thesignature, unbounded } from "@/font";
import { Footer, Header, Content } from "@/layouts/main";

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
    <html
      lang="en"
      className={`${thesignature.variable} ${unbounded.variable} ${albertSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background antialiased">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
