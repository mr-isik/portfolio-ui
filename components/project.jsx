"use client";
import Image from "next/image";
import React from "react";
import { GitHub, Link as LinkIcon } from "react-feather";
import { motion } from "framer-motion";
import Link from "next/link";

const Project = ({ project, index }) => {
  return (
    <div
      key={project.id}
      className={`flex flex-col lg:flex-row items-center w-full ${
        index % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <Image
        src={`http://localhost:1337${project.attributes.thumbnail.data.attributes.url}`}
        alt={project.attributes.title}
        width={450}
        height={200}
        className="rounded-md z-10"
      />
      <motion.div
        className={`bg-indigo-600 w-full lg:w-1/2 -mt-6 lg:mt-0 mx-4 rounded-md z-30 p-4 lg:p-6 h-max shadow-lg ${
          index % 2 === 1 ? "lg:-ml-12" : "lg:-mr-12"
        }`}
        initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
        transition={{ duration: 0.3 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-xl text-white font-medium">
          {project.attributes.title}
        </h3>
        <p className="text-zinc-300 mt-2 text-sm">
          {project.attributes.description}
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href={project.attributes.github}
            className="text-zinc-200 font-medium transition-colors hover:text-white"
          >
            <GitHub size={22} />
          </Link>
          <Link
            href={project.attributes.demo}
            className="text-zinc-200 font-medium transition-colors hover:text-white"
          >
            <LinkIcon size={22} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
