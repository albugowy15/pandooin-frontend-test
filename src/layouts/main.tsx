"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { CircleX, Menu } from "lucide-react";
import { Navigation, navigations } from "@/configs/navigation";

interface NavItemProps extends Navigation {
  setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavItem = (props: NavItemProps) => {
  return (
    <Link
      onClick={() => {
        if (props.setMenuOpen) {
          props.setMenuOpen(false);
        }
      }}
      className="border-b-2 border-primary-foreground hover:border-foreground py-3"
      href={props.href}
    >
      {props.title}
    </Link>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="lg:container py-4 px-4 md:px-12 sticky top-0 bg-primary-foreground z-20">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/images/brands/zamrood_colorful.png"
            alt="Zamrood Brand Logo"
            width={130}
            height={80}
          />
        </Link>
        <Menu
          className="lg:hidden rounded-full p-2 border border-foreground h-10 w-10 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {menuOpen && (
          <div className="bg-black/70 fixed inset-0 z-10">
            <aside className="bg-white h-screen w-[70%] right-0 top-0 absolute flex flex-col gap-20 items-end p-5">
              <CircleX
                className="w-10 h-10 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
              <nav className="flex flex-col gap-6 text-right">
                {navigations.map((item, idx) => (
                  <NavItem key={idx} {...item} setMenuOpen={setMenuOpen} />
                ))}
                <a href="https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood">
                  <Button variant="outline">Need Assistance?</Button>
                </a>
              </nav>
            </aside>
          </div>
        )}
        <nav className="hidden lg:inline-flex gap-12 items-center text-foreground font-bold">
          {navigations.map((item, idx) => (
            <NavItem key={idx} {...item} />
          ))}
          <a href="https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood">
            <Button variant="outline">Need Assistance?</Button>
          </a>
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
  return <main className="scroll-mt-36">{children}</main>;
};

export { Header, Footer, Content };
