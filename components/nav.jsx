"use client";

import { useState } from "react";

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="w-full absolute top-0 z-20">
      <div className="container py-4 flex justify-between items-center">
        {/* Title */}
        <a href="/" className="text-2xl font-semibold text-gray-100">
          MRISIK
        </a>

        {/* Menu List */}
        <div className="hidden lg:flex gap-6 items-center">
          <a
            href="/"
            className="text-zinc-400 hover:text-white transition-colors text-md"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-zinc-400 hover:text-white transition-colors text-md"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-zinc-400 hover:text-white transition-colors text-md"
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className="text-zinc-400 hover:text-white transition-colors text-md"
          >
            Blog
          </a>
        </div>

        {/* CTA */}
        <a
          href="mailto:someone@example.com"
          className="hidden lg:inline-flex gap-2 items-center justify-center px-4 py-3 text-sm font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
        >
          <span className="relative">Contact Me</span>
        </a>

        {/* Toggler */}
        <button
          onClick={() => setShowSidebar(true)}
          className="lg:hidden bg-transparent text-zinc-400 border-none outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {showSidebar && (
        <div
          className={`fixed ${
            showSidebar ? "left-0" : "-left-full"
          } top-0 h-screen w-full p-8 bg-black flex flex-col gap-10 transition-all`}
        >
          {/* Toggler */}
          <button
            onClick={() => setShowSidebar(false)}
            className="lg:hidden absolute top-10 right-10 bg-transparent text-zinc-400 border-none outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Title */}
          <a href="/" className="text-4xl font-semibold text-gray-100">
            MRISIK
          </a>

          {/* Menu List */}
          <div className="flex flex-col gap-6">
            <a
              href="/"
              className="text-zinc-400 hover:text-white transition-colors text-xl"
            >
              Home
            </a>
            <a
              href="/posts"
              className="text-zinc-400 hover:text-white transition-colors text-xl"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
