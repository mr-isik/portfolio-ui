import Nav from "@/components/nav";
import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

const page = () => {
  return (
    <main className={poppins.className}>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
    </main>
  );
};

export default page;
