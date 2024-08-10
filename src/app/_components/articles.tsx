"use client";

import { Article, GetArticlesResponse } from "@/types/api/articles";
import { queryOptions, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import * as React from "react";

const Articles = () => {
  const articlesFetch = queryOptions({
    queryKey: ["articles"],
    queryFn: async (): Promise<GetArticlesResponse> => {
      const response = await fetch("https://pandooin.com/api/zamrood/article");
      return response.json();
    },
  });

  const articlesRes = useQuery(articlesFetch);
  return (
    <section className="px-4 lg:py-[72px] w-full max-w-7xl mx-auto">
      <h2 className="font-unbounded text-xl md:text-3xl text-primary font-bold">
        Articles
      </h2>
      <p className="font-albertsans md:text-lg">
        Our curated writings, offering something for every reader.
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch py-4">
        {articlesRes.data?.data.map((article) => (
          <ArticleCard data={article} key={article.id} />
        ))}
      </div>
    </section>
  );
};

type ArticleCardProps = Pick<
  Article,
  "title" | "featured_image" | "featured_image_caption"
>;

const ArticleCard = (props: { data: ArticleCardProps }) => {
  return (
    <div className="w-full flex flex-col first:lg:row-span-2 first:lg:col-span-2">
      <div className="relative w-full h-full aspect-video overflow-hidden">
        <Image
          className="object-cover object-center grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
          src={props.data.featured_image}
          alt={props.data.featured_image_caption}
          fill
        />
      </div>

      <div className="w-full p-6 lg:p-4 bg-foreground flex flex-col space-y-2">
        <p className="m-0 text-primary-foreground text-base font-bold line-clamp-2 font-albertsans">
          {props.data.title}
        </p>
      </div>
    </div>
  );
};

export { Articles };
