"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Post = ({ title, description, slug }) => {
  return (
    <Link href={`/posts/detail/${slug}`}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 bg-zinc-950 rounded-md border border-zinc-900 p-6 h-full"
      >
        <h1 className="text-2xl font-medium text-zinc-100">{title}</h1>
        <p className="text-zinc-400 text-sm">{description}</p>
      </motion.div>
    </Link>
  );
};

export default Post;
