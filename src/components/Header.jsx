import React, { useState, useEffect } from "react";
import Image from "./../assets/logo.png"

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  
  const enableBodyScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (showLinks && windowWidth < 768) {
      disableBodyScroll(); // Disable scrolling when showLinks is true
    } else {
      enableBodyScroll(); // Enable scrolling when showLinks is false
    }
    // Cleanup function
    return () => {
      enableBodyScroll(); // Always enable scrolling when component unmounts
    };
  }, [showLinks, windowWidth])

  const scrollToTarget = (target) => {
    // Get the target element using its id
    setShowLinks(false);
    const targetElement = document.getElementById(target);
    // Scroll to the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <header className={`z-20 fixed top-0 left-0 pl-6 pr-12 w-full h-20   text-sm flex flex-row items-center bg-[#0b172d] transition-all  ${isScrollingUp && !isAtTop? "shadow-md":""} ${isScrollingDown && !isAtTop && !showLinks? "duration-200 -translate-y-full":""} `} > 
      <div className={`${showLinks? "md:hidden z-4 fixed top-20 bottom-0 right-0 left-0 backdrop-blur-md bg-opacity-70":"hidden"}`}></div>
      <button className="poppins-custom flex flex-row justify-center items-center w-28">
         {/* <img className="h-14 w-14" src={Image} alt="Example" /> */}
          <div className="text-[#787878] text-lg font-thin">&lt;/</div>
          <div className="origin-center text-[#38BDF8] text-2xl font-heavy">J</div>
          <div className="text-[#787878] tracking-wider text-2xl font-thin flex flex-row"><div className="text-[#64FFDA]">C</div>&gt;</div>
      </button>
      
      <nav className="w-full h-full">
        <ol className="hidden md:flex flex-row justify-end items-center h-full font-light space-x-8">
          <li><button className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' onClick={()=>scrollToTarget("home")}> <div className='pr-1 text-[#38BDF8]'>01.</div>  Home</button></li>
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/experience"><div className='pr-1 text-[#38BDF8]'>02.</div> Experience</a></li>
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/work"> <div className='pr-1 text-[#38BDF8]'>03.</div> Work</a></li>
          <li><a className='flex flex-row justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/contact"> <div className='pr-1 text-[#38BDF8]'>04.</div> Contact</a></li>
        </ol>
      </nav>

      <nav className={`transition-all duration-500 ${showLinks? "md:translate-x-full fixed top-0 right-0 bottom-0 w-3/4 text-lg bg-[#112240]" : "translate-x-full fixed top-0 right-0 bottom-0 w-3/4 text-lg bg-[#112240]"} ${isScrollingDown && !isAtTop? "duration-200":""}`}>
        <ol className="flex flex-col justify-center items-center h-full font-thin space-y-8">
          <li><button className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' onClick={()=>scrollToTarget("home")}> <div className='text-[#38BDF8] text-xs'>01.</div>  Home</button></li>
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/experience"><div className='text-[#38BDF8] text-xs'>02.</div> Experience</a></li>
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/work"> <div className='text-[#38BDF8] text-xs'>03.</div> Work</a></li>
          <li><a className='flex flex-col justify-end items-center text-[#bdc5de] hover:text-[#64FFDA]' href="/contact"> <div className='text-[#38BDF8] text-xs'>04.</div> Contact</a></li>  
          <br className="h-20"></br>
          <div className="flex relative text-[#38BDF8]">
            <button className="relative z-10 h-14 w-40 border border-[#38BDF8] bg-[#112240] rounded-sm transition-all duration-300 transition-transform transform hover:-translate-y-0.5 hover:-translate-x-0.5">Resume</button>
            <div className="absolute top-0  bg-[#64FFDA] w-40 h-14 z-1 rounded-sm"></div>
          </div>
          <br className="h-20"></br>
          <br className="h-20"></br>
          <br className="h-20"></br>
          <div className='flex flex-row justify-end items-center space-x-8'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="none" stroke="#bdc5de" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#bdc5de" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </ol>
      </nav>

      <div className="hidden md:flex relative pl-8 text-[#38BDF8]">
        <button className="relative z-10 h-10 w-20 border border-[#38BDF8] bg-[#0B172D] rounded-sm transition-all duration-300 transition-transform transform hover:-translate-y-0.5 hover:-translate-x-0.5">Resume</button>
        <div className="absolute top-0  bg-[#64FFDA] w-20 h-10 z-1 rounded-sm"></div>
      </div>

      <div className="relative pl-8 text-[#38BDF8] md:hidden">
        {showLinks? 
              <button onClick={() => setShowLinks(!showLinks)} className="transition-all duration-300 transform rotate-180 text-6xl font-thin">
                  &#x00d7;
              </button>:
              <button onClick={() => setShowLinks(!showLinks)} className="transition-all duration-300 transform scale-y-[1]">
                <div className="flex flex-col justify-center items-end">
                  <div className="w-10 h-0.5 bg-[#38BDF8] m-1"></div>
                  <div className="w-8 h-0.5 bg-[#38BDF8] m-1"></div>
                  <div className="w-6 h-0.5 bg-[#38BDF8] m-1"></div>
                </div>
             </button>

        }
      </div>
    </header>
  );
};


export default Header;