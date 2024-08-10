"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import { toIDRString } from "@/lib/currencies";
import { GetProductsResponse, Product } from "@/types/api/products";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Destinations = () => {
  const productsFetch = queryOptions({
    queryKey: ["products"],
    queryFn: async (): Promise<GetProductsResponse> => {
      const response = await fetch(
        "https://pandooin.com/api/zamrood/itinerary?highlight=true",
      );
      return response.json();
    },
  });

  const productData = useQuery(productsFetch);
  return (
    <section className="px-4 py-10 lg:py-[72px] w-full max-w-7xl mx-auto flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <h2 className="font-unbounded font-bold text-xl md:text-3xl text-primary">
          Destinations
        </h2>
        <Link
          href="#destinations"
          className="flex gap-2 items-center md:justify-end"
        >
          <ChevronRight className="rounded-full border border-primary p-1 h-8 w-8" />
          <p className="font-albertsans text-sm text-primary">EXPLORE MORE</p>
        </Link>
      </div>

      <div className="flex flex-col gap-14 lg:gap-20 py-10">
        {productData.data?.data.map((product) => (
          <DestinationCard key={product.itinerary_id} data={product} />
        ))}
      </div>

      <Link
        href="#destinations"
        className="flex gap-2 items-center justify-center md:justify-end"
      >
        <ChevronRight className="rounded-full border border-primary p-1 h-8 w-8" />
        <p className="font-albertsans text-sm text-primary">EXPLORE MORE</p>
      </Link>
    </section>
  );
};

type DestinationCardProps = Pick<
  Product,
  | "itinerary_day"
  | "itinerary_name"
  | "partner_name"
  | "itinerary_short_description"
  | "related_galleries"
  | "related_variant"
>;
const DestinationCard = (props: { data: DestinationCardProps }) => {
  return (
    <div className="flex flex-col gap-3 lg:gap-8 lg:odd:flex-row lg:even:flex-row-reverse">
      <div className="relative w-full h-56 lg:h-auto lg:w-[45%]">
        <Image
          src={props.data.related_galleries[0]?.src ?? ""}
          alt={props.data.itinerary_name}
          fill
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <p className="font-albertsans text-sm lg:text-base text-primary uppercase">
          {props.data.itinerary_day} days
        </p>
        <h3 className="font-unbounded font-bold text-lg lg:text-xl">
          {props.data.itinerary_name}
        </h3>
        <p className="font-albertsans font-bold text-sm lg:text-base text-primary">
          Organized by {props.data.partner_name}
        </p>
        <p className="font-albertsans text-primary text-sm lg:text-base line-clamp-3">
          {props.data.itinerary_short_description}
        </p>
        <div className="flex justify-between mt-6 lg:mt-14 items-center">
          <div>
            <p className="font-albertsans text-sm lg:text-base text-primary">
              Start from
            </p>
            <p className="font-unbounded font-medium text-primary text-xl lg:text-2xl">
              IDR{" "}
              {toIDRString(
                props.data.related_variant.itinerary_variant_pub_price,
              )}
            </p>
          </div>
          <Button variant="outline" className="text-sm lg:text-base py-2">
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
};
export { Destinations };
