import React, { useState } from "react";


const Footer = () => {
  const [colorLinkedIn, setColorLinkedIn] = useState('#8892b0');
  const [colorGitHub, setColorGitHub] = useState('#8892b0');

  const handleClick = (target) => {
    if(target === "github"){
        window.location.href = 'https://github.com/JabirC/Portfolio';
    }
    else {
        window.location.href = 'https://brittanychiang.com/';
    }
  };
  
  return (
    <>
    <div className="z-1 md:fixed flex flex-col justify-center items-center pt-10 space-y-6 md:space-y-4 md:pb-10 md:pb-0 bottom-0 left-0 w-full md:w-20 lg:w-24 xl:w-32 h-24 md:h-400">
        <ul className="flex flex-row md:flex-col justify-center items-center space-x-8  md:space-x-0 md:space-y-8">
            <li className="flex flex-col md:flex-row justify-center items-center" onClick={()=>window.open('https://github.com/JabirC', '_blank')}>
                <a className="transition-transform transform hover:-translate-y-1" onMouseEnter={()=>setColorGitHub("#64ffda")} onMouseLeave={()=>setColorGitHub('#8892b0')} href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="none" stroke={colorGitHub} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
                    </svg>
                </a>
            </li>
            <li className="flex flex-col md:flex-row justify-center items-center" onClick={()=>window.open('https://www.linkedin.com/in/jabirc/', '_blank')}>
                <a className="transition-transform transform hover:-translate-y-1" onMouseEnter={()=>setColorLinkedIn("#64ffda")} onMouseLeave={()=>setColorLinkedIn('#8892b0')} href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill={colorLinkedIn} fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clipRule="evenodd"></path>
                    </svg>
                 </a>
            </li>    
            <li className="hidden md:flex flex-col md:flex-row justify-center items-center">
                <div className="w-0.5 h-80 border-[#a8b2d1] border-l "></div>
            </li>
        </ul>
        {/* <div className="md:hidden text-xs text-[#8892b0] text-center">
            Built with passion by Jabir Chowdhury
        </div> */}
        {/* <div className="md:hidden text-xs text-[#a8b2d1]">
            ©2024
        </div> */}
    </div>
    <div className=" text-xs text-[#8892b0] text-center pb-4 hover:text-[#64ffda]">
            <button onClick={()=>handleClick("github")}>Built with passion by Jabir Chowdhury</button>
    </div>
    <div className=" text-xs text-[#8892b0] text-center pb-4 hover:text-[#64ffda]">
            <button onClick={()=>handleClick("site")}>UI design by Britney Chiang</button>
    </div>
    </>
  );
};


export default Footer;