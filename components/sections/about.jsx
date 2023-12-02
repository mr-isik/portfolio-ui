import { fetchData } from "@/app/utils/fetch-data";
import Image from "next/image";

const About = async () => {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/techs?populate[logo][populate]=true&populate[logo][fields][0]=url`
  );

  return (
    <section id="about" className="py-16">
      <div className="container flex items-center flex-col">
        <h2 className="text-xl font-semibold text-zinc-600">About</h2>
        <h1 className="text-white font-semibold text-3xl mt-2">
          My Tech Stack
        </h1>

        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          {data.data.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col gap-4 items-center px-4 py-2 rounded-md border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors"
            >
              <span className="text-lg text-zinc-400">
                {tech.attributes.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
