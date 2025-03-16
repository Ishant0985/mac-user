import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import RelatedPost from "@/components/Blog/RelatedPost";
import { getBlogBySlug, getAllBlogs, getRelatedBlogs } from "@/lib/blogUtils";
import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} - Motor Auto Care Blog`,
    description: blog.excerpt || blog.paragraph,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.paragraph,
      images: [{ url: blog.image }],
    },
  };
}

const SingleBlogPage = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogs(blog);

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {blog.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image src={blog.author.image} alt={blog.author.name} fill />
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base font-medium text-body-color">
                          By <span>{blog.author.name}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                            {/* Calendar icon SVG path */}
                          </svg>
                        </span>
                        {blog.publishDate}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {blog.tags[0]}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="blog-details">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="mb-6 text-xl font-bold leading-tight text-black dark:text-white">
                      Tags
                    </h3>
                    <div className="flex flex-wrap items-center">
                      {blog.tags.map((tag, index) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="mt-12">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mt-12 lg:mt-0">
                <RelatedPost posts={relatedPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;