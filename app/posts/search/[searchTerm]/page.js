import { fetchData } from "@/app/utils/fetch-data";
import Posts from "@/app/posts/components/posts";
import Link from "next/link";
import Search from "@/app/posts/components/search";

const page = async ({ params: { searchTerm } }) => {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[title][$contains]=${searchTerm}`
  );

  return (
    <div className="w-full grid-bg glow-bg min-h-screen flex items-center text-white pt-10">
      <div className="container flex flex-col items-center z-20 w-full py-10">
        <Link href="/" className="text-zinc-400 hover:text-white mb-6 text-lg">
          Back to home
        </Link>
        <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-10">
          All Posts
        </h1>
        <Search />
        <Posts data={data.data} />
      </div>
    </div>
  );
};

export default page;
