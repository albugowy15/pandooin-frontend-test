import { Button } from "@/components/button";
import Image from "next/image";

const Services = () => {
  return (
    <section className="container flex flex-col justify-center py-8 lg:py-14 px-4 lg:px-12">
      <h2 className="font-thesignature text-5xl md:text-7xl text-center">
        Beyond Premium
      </h2>
      <h3 className="font-unbounded font-bold text-primary text-center md:text-3xl uppercase">
        Elevate Your Experience
      </h3>
      <div className="flex flex-col lg:flex-row gap-4 justify-center py-8 lg:py-10">
        <ServiceItem
          imageSrc="/images/icons/our_services_01.png"
          title="PERSONAL ITINERARIES"
          desc="Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires."
        />
        <ServiceItem
          imageSrc="/images/icons/our_services_02.png"
          title="EXCLUSIVE EXPERIENCES"
          desc="From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your trip to the next level."
        />
        <ServiceItem
          imageSrc="/images/icons/our_services_03.png"
          title="BEST FACILITIES"
          desc="Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence."
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-14 justify-center items-center md:w-[80%] mx-auto py-14">
        <Image
          src="/images/icons/puzzle_brush.png"
          alt="Discover Tailored Experience"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="font-bold font-unbounded text-center md:text-left text-xl md:text-3xl text-primary">
            Discover Tailored Experiences
          </h3>
          <p className="font-albertsans text-center md:text-left text-sm md:text-lg text-black">
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <Button className="w-full md:w-fit">Customize Your Trip</Button>
        </div>
      </div>

      <Image
        className="object-cover w-full"
        src="/images/decorators/separator_colorful.png"
        alt="section separator"
        width={1000}
        height={200}
      />
    </section>
  );
};

const ServiceItem = (props: {
  imageSrc: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={props.imageSrc}
        width={120}
        height={120}
        loading="eager"
        alt="Personal Itineraries Service"
      />
      <h4 className="font-albertsans font-bold text-lg md:text-2xl text-center">
        {props.title}
      </h4>
      <p className="font-albertsans text-center text-sm text-black">
        {props.desc}
      </p>
    </div>
  );
};

export { Services };
