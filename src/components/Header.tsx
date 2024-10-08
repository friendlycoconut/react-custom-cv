import React from "react";

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 sm:text-center pt-20 items-center justify-center  text-center">
      <div className="flex flex-col">
        <code className="text-lightblue_vs text-2xl text-sm md:text-2xl">Cracking IT problems with the Friendliest Coconut around!</code>
        <code className="text-[#FEFFDB] text-4xl mt-5">Friendly Coconut</code>
      </div>
      <a href="https://www.example.com" target="_blank" rel="noreferrer">
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >
        <code>Check out my Projects !</code>
      </button>
      </a>
    </div>
  );
}

export default Header;
