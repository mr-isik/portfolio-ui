import { fetchData } from "@/app/utils/fetch-data";
import Link from "next/link";
import Markdown from "react-markdown";

export async function generateMetadata({ params: { slug } }) {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}`
  );

  return {
    title: data.data[0].attributes.title,
    description: data.data[0].attributes.description,
  };
}

const page = async ({ params: { slug } }) => {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}`
  );

  return (
    <main className="grid-bg min-h-screen w-full pt-12 md:pt-24 pb-16">
      <div className="container">
        <article className="prose prose-invert lg:prose-lg">
          <p className="text-sm">{data.data[0].attributes.date}</p>
          <h1>{data.data[0].attributes.title}</h1>
          <Markdown>{data.data[0].attributes.content}</Markdown>
        </article>
        <Link
          href="/posts"
          className="underline block text-lg text-white mt-16"
        >
          Back to posts
        </Link>
      </div>
    </main>
  );
};

export default page;
