import { fetchData } from "@/app/utils/fetch-data";
import Link from "next/link";
import Project from "@/components/project";

const Portfolio = async () => {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?pagination[start]=0&pagination[limit]=4&populate[thumbnail][populate]=true&populate[thumbnail][fields][0]=name&populate[thumbnail][fields][1]=alternativeText&populate[thumbnail][fields][2]=url`
  );

  return (
    <section id="portfolio" className="py-20 bg-zinc-900">
      <div className="container flex flex-col items-center">
        <h2 className="text-xl font-semibold text-zinc-600">Portfolio</h2>
        <h1 className="text-white font-semibold text-3xl mt-2">
          Featured Projects
        </h1>

        <div className="flex flex-col items-center gap-32 mt-16">
          {data.data.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </div>

        <Link
          href="https://github.com/mr-isik"
          className="text-zinc-400 hover:text-white mt-16 text-lg"
        >
          See others
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
