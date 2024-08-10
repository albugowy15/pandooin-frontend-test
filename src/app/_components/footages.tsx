"use client";

import * as React from "react";
import "@/styles/lightgallery.css";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";

const Footages = () => {
  return (
    <section className="px-4 py-10 lg:py-[72px] bg-secondary">
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-6">
        <h2 className="font-thesignature text-5xl md:text-6xl text-primary">
          Luxury Footages
        </h2>

        <LightGallery
          plugins={[lgZoom, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames="w-full lg:grid grid-cols-3 gap-6 mb-6"
        >
          <a href="/images/footages/01.png">
            <FootageImage src="/images/footages/01.png" />
          </a>
          <a href="/images/footages/02.jpg" className="hidden lg:block">
            <FootageImage src="/images/footages/02.jpg" />
          </a>
          <a href="/images/footages/03.png" className="hidden lg:block">
            <FootageImage src="/images/footages/03.png" />
          </a>
        </LightGallery>

        <Image
          className="hidden col-span-3 lg:block object-cover w-full"
          src="/images/decorators/separator_white.png"
          alt="section separator"
          width={1000}
          height={200}
        />

        <LightGallery
          plugins={[lgZoom, lgFullscreen, lgThumbnail]}
          mode="lg-fade"
          elementClassNames="hidden w-full lg:grid grid-cols-3 gap-6 mb-6"
        >
          <a href="/images/footages/04.jpg">
            <FootageImage src="/images/footages/04.jpg" />
          </a>
          <a href="/images/footages/05.jpg" className="hidden lg:block">
            <FootageImage src="/images/footages/05.jpg" />
          </a>
          <a href="/images/footages/06.jpg" className="hidden lg:block">
            <FootageImage src="/images/footages/06.jpg" />
          </a>
        </LightGallery>
      </div>
    </section>
  );
};

const FootageImage = (props: { src: string }) => {
  return (
    <div className="relative w-full aspect-[356/256] cursor-pointer">
      <Image
        className="object-cover object-center"
        src={props.src}
        alt="Footages collection"
        fill
      />
    </div>
  );
};

export { Footages };
