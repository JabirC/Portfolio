import React, { useState, useEffect } from "react";
import Image from "./../assets/logo.png"

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(prevScrollPos > currentScrollPos);
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      setIsAtTop(currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <header className={`z-20 fixed top-0 left-0 pl-6 pr-12 w-full h-20   text-sm flex flex-row items-center bg-[#0B172D] transition-all  ${isScrollingUp && !isAtTop? "duration-600 shadow-lg pt-1":""} ${isScrollingDown && !isAtTop && !showLinks? "duration-200 -translate-y-full":""} `} > 
      <button className="poppins-custom flex flex-row justify-center items-center w-28">
         {/* <img className="h-14 w-14" src={Image} alt="Example" /> */}
          <div className="text-[#787878] text-lg font-thin">&lt;/</div>
          <div className="origin-center text-[#64FFDA] text-2xl font-heavy">J</div>
          <div className="text-[#787878] tracking-wider text-2xl font-thin flex flex-row"><div className="text-[#64FFDA]">C</div>&gt;</div>
      </button>
      
      <nav className="w-full h-full">
        <ol className="hidden md:flex flex-row justify-end items-center h-full font-light space-x-8">
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/"> <div className='pr-1 text-[#64FFDA]'>01.</div>  Home</a></li>
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/experience"><div className='pr-1 text-[#64FFDA]'>02.</div> Experience</a></li>
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/work"> <div className='pr-1 text-[#64FFDA]'>03.</div> Work</a></li>
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/contact"> <div className='pr-1 text-[#64FFDA]'>04.</div> Contact</a></li>
        </ol>
      </nav>

      <nav className={`transition-all duration-500 ${showLinks? "md:translate-x-full fixed top-0 right-0 bottom-0 w-3/4 text-lg bg-[#112240]" : "translate-x-full fixed top-0 right-0 bottom-0 w-3/4 text-lg bg-[#112240]"} ${isScrollingDown && !isAtTop? "duration-200":""}`}>
        <ol className="flex flex-col justify-center items-center h-full font-thin space-y-8">
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/"> <div className='text-[#64FFDA] text-xs'>01.</div>  Home</a></li>
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/experience"><div className='text-[#64FFDA] text-xs'>02.</div> Experience</a></li>
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/work"> <div className='text-[#64FFDA] text-xs'>03.</div> Work</a></li>
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/contact"> <div className='text-[#64FFDA] text-xs'>04.</div> Contact</a></li>  
          <br className="h-20"></br>
          <div className="flex relative text-[#64FFDA]">
            <button className="relative z-10 h-14 w-40 border border-[#64FFDA] bg-[#112240] rounded-sm transition-all duration-300 transition-transform transform hover:-translate-y-0.5 hover:-translate-x-0.5">Resume</button>
            <div className="absolute top-0  bg-[#64FFDA] w-40 h-14 z-1 rounded-sm"></div>
          </div>
        </ol>
      </nav>

      <div className="hidden md:flex relative pl-8 text-[#64FFDA]">
        <button className="relative z-10 h-10 w-20 border border-[#64FFDA] bg-[#0B172D] rounded-sm transition-all duration-300 transition-transform transform hover:-translate-y-0.5 hover:-translate-x-0.5">Resume</button>
        <div className="absolute top-0  bg-[#64FFDA] w-20 h-10 z-1 rounded-sm"></div>
      </div>

      <div className="relative pl-8 text-[#64FFDA] md:hidden">
        {showLinks? 
              <button onClick={() => setShowLinks(!showLinks)} className="transition-all duration-300 transform rotate-180 text-6xl font-thin">
                  &#x00d7;
              </button>:
              <button onClick={() => setShowLinks(!showLinks)} className="transition-all duration-300 transform scale-y-[1]">
                <div className="flex flex-col justify-center items-end">
                  <div className="w-10 h-0.5 bg-[#64FFDA] m-1"></div>
                  <div className="w-8 h-0.5 bg-[#64FFDA] m-1"></div>
                  <div className="w-6 h-0.5 bg-[#64FFDA] m-1"></div>
                </div>
             </button>

        }
      </div>

    </header>
  );
};


export default Header;