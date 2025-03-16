import { Blog } from "@/types/blog";
import { getAllBlogs } from "@/lib/blogUtils";

export async function getBlogData(): Promise<Blog[]> {
  const blogs = await getAllBlogs();
  return blogs;
}

// Default static data for fallback
const blogData: Blog[] = [];
export default blogData;
