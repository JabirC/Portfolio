
export default function Home() {
  return (
    <div id="home"  className="poppins-custom flex min-h-screen flex-col items-center justify-center p-6 sm:p-14 ">
        <div className=" text-left w-full md:pl-10 lg:pl-20 md:mb-0 md:max-w-6xl">
          <div className="tracking-2xl text-[#64ffda] font-lighter" >
            Hey there, I'm
          </div>
          <div className="font-semibold pt-6 text-[#bed2fc] text-3xl md:text-6xl sm:text-5xl xs:text-4xl">
            <div className="line-height-custom">Jabir Chowdhury.</div>
          </div>
          <div className="font-semibold pb-6 text-[#8892b0] text-3xl md:text-6xl sm:text-5xl xs:text-4xl">
             <div className="line-height-custom">I transform ideas into code. </div>
          </div>
          {/* <div className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-thin"> 
              Software Engineer
          </div> */}
          <div className="text-left pb-12 text-[#8892b0] text-md max-w-screen-md"> 
          I'm a software engineer with a passion for building things and solving problems. While I have experience in full-stack, my heart lies in backend development. Currently, I'm diving into the fascinating world of distributed systems.
          </div>
          <div className="flex relative text-[#64ffda]">
            <button className="relative z-10 h-14 w-60 border border-[#64ffda] bg-[#0a192f] rounded-md transition-all duration-300 transition-transform transform hover:-translate-y-1 hover:-translate-x-1">Check out my projects!</button>
            <div className="absolute top-0  bg-[#64ffda] w-60 h-14 z-1 rounded-md"></div>
          </div>
        </div>
    </div>
  );
}