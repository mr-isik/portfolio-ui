"use client";

import Post from "@/components/post";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "react-feather";

const Posts = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentPosts = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
            {currentPosts.map((post) => (
              <Post
                key={post.id}
                title={post.attributes.title}
                description={post.attributes.description}
                slug={post.attributes.slug}
              />
            ))}
          </div>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(data.length / postsPerPage)}
            previousLabel={<ChevronLeft size={24} />}
            nextLabel={<ChevronRight size={24} />}
            containerClassName={"flex gap-2"}
            pageLinkClassName={
              "rounded-md border border-zinc-900 bg-zinc-950 h-10 w-10 flex items-center justify-center text-zinc-400 transition-colors hover:bg-indigo-600 hover:text-white"
            }
            previousLinkClassName={
              "rounded-md border border-zinc-900 bg-zinc-950 h-10 w-10 flex items-center justify-center text-zinc-400 transition-colors hover:bg-indigo-600 hover:text-white"
            }
            nextLinkClassName={
              "rounded-md border border-zinc-900 bg-zinc-950 h-10 w-10 flex items-center justify-center text-zinc-400 transition-colors hover:bg-indigo-600 hover:text-white"
            }
            activeLinkClassName={"active"}
          />
        </>
      ) : (
        <h1 className="text-xl mt-12 text-zinc-300">No results found.</h1>
      )}
    </>
  );
};

export default Posts;
