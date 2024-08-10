import { Button } from "@/components/button";

const Banner = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground px-4 lg:px-12 lg:py-[72px] text-center md:text-left flex flex-col justify-center items-center md:items-start h-screen bg-[url('/images/backgrounds/website_header.jpg')] bg-cover">
        <h1 className="font-thesignature text-6xl lg:text-7xl text-secondary leading-none">
          Premium Travel
        </h1>
        <h2 className="font-unbounded font-bold text-2xl lg:text-3xl leading-none">
          Beyond Expectation
        </h2>
        <p className="font-albertsans text-sm lg:text-lg max-w-3xl my-2">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </p>
        <Button
          variant="outline"
          className="border-primary-foreground text-primary-foreground mt-2"
        >
          Take me there
        </Button>
      </section>
    </>
  );
};

export { Banner };
