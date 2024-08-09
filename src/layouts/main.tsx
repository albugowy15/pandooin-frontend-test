import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";

const Header = () => {
  return (
    <header className="container py-4 px-12">
      <div className="flex flex-row justify-between">
        <Image
          src="/images/brands/zamrood_colorful.png"
          alt="Zamrood Brand Logo"
          width={130}
          height={80}
        />
        <nav className="flex gap-12 items-center text-foreground font-bold">
          <Link href="/">Homepage</Link>
          <Link href="/">Customize Your Trip</Link>
          <Link href="/">Destination</Link>
          <Link href="/">Article</Link>
          <Button variant="outline">Need Assistance?</Button>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="container py-4 px-12 flex justify-between bg-primary text-primary-foreground">
      <p className="text-sm">© 2023 Zamrood by PT Teknologi Pandu Wisata</p>
      <ul className="flex gap-3 items-center">
        <li>
          <a href="#facebook" target="_blank">
            <Image
              src="/images/icons/facebook.png"
              alt="Zamrood Facebook"
              width={20}
              height={20}
            />
          </a>
        </li>
        <li>
          <a href="#instagram" target="_blank">
            <Image
              src="/images/icons/instagram.png"
              alt="Zamrood Instagram"
              width={20}
              height={20}
            />
          </a>
        </li>
        <li>
          <a href="#email" target="_blank">
            <Image
              src="/images/icons/email.png"
              alt="Zamrood Email"
              width={20}
              height={20}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export { Header, Footer, Content };
