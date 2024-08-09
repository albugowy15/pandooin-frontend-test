import { Albert_Sans, Unbounded } from "next/font/google";
import localFont from "next/font/local";

export const thesignature = localFont({
  src: "../public/fonts/Thesignature.woff2",
  display: "swap",
  variable: "--font-thesignature",
});

export const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albertsans",
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});
