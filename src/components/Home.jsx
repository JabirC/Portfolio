
export default function Home() {
  return (
    <div className="poppins-custom flex min-h-screen flex-col items-center justify-center p-24 ">
        <div className=" text-left space-y-10 md:mb-0 md:w-full md:max-w-5xl md:grid-cols-2  text-black">
          <div className="text-[#64FFDA]" >
            Hi, my name is
          </div>
          <div className="font-bold text-[#ccd6f6] text-4xl md:text-6xl sm:text-4xl">
            Jabir Chowdhury.
          </div>
          <div className="font-bold text-[#8892b0] text-4xl md:text-6xl sm:text-4xl">
             I build things
          </div>
          {/* <div className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-thin"> 
              Software Engineer
          </div> */}
          <div className="text-left text-[#8892b0] text-md"> 
          I'm a software engineer with a passion for building things and solving problems. While I have experience in full-stack, my heart lies in backend development. Currently, I'm diving into the fascinating world of distributed systems.
          </div>
          <div className="flex relative text-[#64FFDA]">
            <button className="relative z-10 h-14 w-60 border border-[#64FFDA] bg-[#0B172D] rounded-sm transition-all duration-300 transition-transform transform hover:-translate-y-0.5 hover:-translate-x-0.5">Check out my projects!</button>
            <div className="absolute top-0  bg-[#64FFDA] w-60 h-14 z-1 rounded-sm"></div>
          </div>
        </div>
    </div>
  );
}