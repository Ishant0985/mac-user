import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({ posts }: { posts: Blog[] }) => {
  return (
    <>
      <div className="w-full">
        <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
          Related Posts
        </h3>
        <div className="-mx-4 flex flex-wrap">
          {posts.map((blog) => (
            <div key={blog.id} className="w-full px-4 md:w-1/2 lg:w-full">
              <div className="mb-10 w-full items-center justify-between md:flex">
                <div className="mb-5 w-full md:mb-0 md:w-[150px]">
                  <div className="relative aspect-[2/1.4] w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[calc(100%-170px)]">
                  <h4>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="mb-[10px] inline-block text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      {blog.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-body-color">{blog.publishDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
