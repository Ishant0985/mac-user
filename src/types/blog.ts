export type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  content: string;
  excerpt?: string;
};
