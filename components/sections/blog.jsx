import Post from "@/components/post";

import { fetchData } from "@/app/utils/fetch-data";
import Link from "next/link";

const Blog = async () => {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?sort=id:desc&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <section id="blog" className="py-12 grid-bg">
      <div className="container flex flex-col items-center">
        <h2 className="text-xl font-semibold text-zinc-600">Blog</h2>
        <h1 className="text-white font-semibold text-3xl mt-2">Latest Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
          {data.data.map((post) => (
            <Post
              key={post.id}
              title={post.attributes.title}
              description={post.attributes.description}
              slug={post.attributes.slug}
            />
          ))}
        </div>
        <Link
          href="/posts"
          className="text-zinc-400 hover:text-white mt-16 text-lg"
        >
          See all posts
        </Link>
      </div>
    </section>
  );
};

export default Blog;
