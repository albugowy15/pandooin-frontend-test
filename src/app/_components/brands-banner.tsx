import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const BrandsBanner = () => {
  return (
    <section className="lg:container px-4 lg:px-12 text-primary-foreground py-10">
      <div className="px-6 py-4 flex flex-col gap-4 md:flex-row md:justify-between items-center bg-[url('/images/backgrounds/section_background.jpg')] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-multiply">
        <Image
          src="/images/brands/zamrood_white.png"
          alt="Zamrood Pandooin Banner"
          width={200}
          height={40}
        />
        <div className="text-center md:text-right">
          <p className="text-sm md:text-base">
            Want to see other destinations? Check us out at our website
          </p>
          <a href="https://pandooin.com" className="inline-flex items-center">
            <span className="font-bold underline md:text-lg">pandooin.com</span>{" "}
            <ArrowUpRight className="h-4 w-4 md:h-6 md:w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { BrandsBanner };
