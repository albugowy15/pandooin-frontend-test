import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="lg:container py-4 px-4 md:px-12">
      <div className="flex flex-row justify-between items-center">
        <Image
          src="/images/brands/zamrood_colorful.png"
          alt="Zamrood Brand Logo"
          width={130}
          height={80}
        />
        <Menu className="rounded-full p-2 border border-foreground h-10 w-10 cursor-pointer" />
        <nav className="hidden lg:flex gap-12 items-center text-foreground font-bold">
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
    <footer className="lg:container py-4 px-4 md:px-12 flex flex-col md:flex-row items-center gap-3 md:justify-between bg-primary text-primary-foreground">
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
