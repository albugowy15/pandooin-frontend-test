import { ChevronRight } from "lucide-react";
import * as React from "react";

const Destinations = () => {
  return (
    <>
      <section className="lg:container px-4 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <h2 className="font-unbounded font-bold text-xl md:text-3xl text-primary">
            Destinations
          </h2>
          <div className="flex gap-2 items-center md:justify-end">
            <ChevronRight className="rounded-full border border-primary p-1 h-8 w-8" />
            <p className="font-albertsans text-sm text-primary">EXPLORE MORE</p>
          </div>
        </div>

        {/* start Destinations content */}
        {/* end Destinations content */}

        <div className="flex gap-2 items-center justify-center md:justify-end">
          <ChevronRight className="rounded-full border border-primary p-1 h-8 w-8" />
          <p className="font-albertsans text-sm text-primary">EXPLORE MORE</p>
        </div>
      </section>
    </>
  );
};

export { Destinations };
