import { ApiResponse } from ".";

export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
};

export type GetArticlesResponse = ApiResponse<Article[]>;
