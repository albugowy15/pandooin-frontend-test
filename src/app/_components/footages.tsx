import * as React from "react";
import Image from "next/image";

const Footages = () => {
  return (
    <section className="lg:container px-4 lg:px-12 py-10 lg:py-16 bg-secondary">
      <h2 className="font-thesignature text-5xl md:text-6xl text-primary">
        Luxury Footages
      </h2>

      <div className="py-3">
        <FootageImage src="/images/footages/01.png" />
      </div>
      <div className="hidden w-full lg:grid grid-cols-3 gap-6 mt-6">
        <FootageImage src="/images/footages/01.png" />
        <FootageImage src="/images/footages/02.jpg" />
        <FootageImage src="/images/footages/03.png" />
      </div>

      <Image
        className="hidden lg:block object-cover w-full"
        src="/images/decorators/separator_white.png"
        alt="section separator"
        width={1000}
        height={200}
      />

      <div className="hidden w-full lg:grid grid-cols-3 gap-6 mb-6">
        <FootageImage src="/images/footages/04.jpg" />
        <FootageImage src="/images/footages/05.jpg" />
        <FootageImage src="/images/footages/06.jpg" />
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
