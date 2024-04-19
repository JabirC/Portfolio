import React, { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 pl-10 pr-16 w-full h-20   text-xs flex flex-row items-center ">
      <div className="origin-center text-[#64FFDA]">JabirC._</div>
      <nav className="w-full h-full">
        <ol className="hidden md:flex flex-row justify-end items-center h-full font-light space-x-8">
          <li><a className='flex flex-row justify-end items-center hover:text-[#64FFDA]' href="/"> <div className='pr-1 text-[#64FFDA]'>01.</div>  Home</a></li>
          <li><a className='flex flex-row justify-end items-center hover:text-[#64FFDA]' href="/experience"><div className='pr-1 text-[#64FFDA]'>02.</div> Experience</a></li>
          <li><a className='flex flex-row justify-end items-center hover:text-[#64FFDA]' href="/work"> <div className='pr-1 text-[#64FFDA]'>03.</div> Work</a></li>
          <li><a className='flex flex-row justify-end items-center hover:text-[#64FFDA]' href="/contact"> <div className='pr-1 text-[#64FFDA]'>04.</div> Contact</a></li>
        </ol>
      </nav>
      <div className="relative pl-8 text-[#64FFDA]">
        <button className="relative z-10 h-10 w-20 border border-[#64FFDA] bg-[#0B172D] rounded-md transition-transform transform hover:-translate-y-1 hover:-translate-x-1">Resume</button>
        <div className="absolute top-0  bg-[#64FFDA] w-20 h-10 z-1 rounded-md"></div>
      </div>

    </header>
  );
};


export default Header;