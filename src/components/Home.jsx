
export default function Home() {
  return (
    <div className="poppins-custom flex min-h-screen flex-col items-center justify-center p-24 ">
        <div className=" text-left  md:mb-0 md:w-full md:max-w-5xl md:grid-cols-2  text-black">
          <div className="tracking-2xl text-[#64FFDA] font-lighter" >
            Hi, my name is
          </div>
          <div className="leading-10 font-bold pt-6 text-white text-3xl md:text-6xl sm:text-4xl">
            Jabir Chowdhury.
          </div>
          <div className="leading-10 font-bold pb-6 text-[#8892b0] text-3xl md:text-6xl sm:text-4xl">
             I have a passion for building things.
          </div>
          {/* <div className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-thin"> 
              Software Engineer
          </div> */}
          <div className="text-left pb-12 pt-6 text-[#8892b0] text-md"> 
          I'm a software engineer with a passion for building things and solving problems. While I have experience in full-stack, my heart lies in backend development. Currently, I'm diving into the fascinating world of distributed systems.
          </div>
          <div className="flex relative text-[#64FFDA]">
            <button className="relative z-10 h-14 w-60 border border-[#64FFDA] bg-[#0B172D] rounded-md transition-all duration-300 transition-transform transform hover:-translate-y-1 hover:-translate-x-1">Check out my projects!</button>
            <div className="absolute top-0  bg-[#64FFDA] w-60 h-14 z-1 rounded-md"></div>
          </div>
        </div>
    </div>
  );
}