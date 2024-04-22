export default function Experience() {
    return (
      <div className="flex min-h-screen flex-col items-center md:pl-24 sm:p-14 pt-14 pl-14 pb-14 pt-24">

            <div className=" w-full text-left md:w-full md:max-w-3xl">
                <div className="text-xl flex flex-row items-center space-x-4"> <div className="text-[#38BDF8]">02.</div> 
                <div className="poppins-custom text-3xl text-[#bed2fc] font-medium">  Where I've Worked</div>
            </div>

            <div className="flex sm:flex-row flex-col ">
                <div className="poppins-custom justify-center text-[#bdc5de] text-xs font-thin tracking-widest pt-14">
                    <ol className="flex sm:flex-col flex-row  overflow-x-auto whitespace-no-wrap"> 
                        <li>
                            <button className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#38BDF8]">
                                <div className="sm:w-0.5 sm:h-full  bg-[#1d2c45]"> </div>
                                <div className="sm:pl-4 sm:pb-0 pt-2 sm:pt-0">DataAnnotaion</div>
                                <div className="sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3"> </div>
                            </button>
                        </li>
                        <li>
                            <button className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#38BDF8]">
                                <div className="sm:w-0.5 sm:h-full  bg-[#1d2c45]"> </div>
                                <div className="sm:pl-4 sm:pb-0 pt-2 sm:pt-0">Headstarter</div>
                                <div className="sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3"> </div>
                            </button>
                        </li>
                        <li>
                            <button className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#38BDF8]">
                                <div className="sm:w-0.5 sm:h-full  bg-[#1d2c45]"> </div>
                                <div className="sm:pl-4 sm:pb-0 pt-2 sm:pt-0">NASA</div>
                                <div className="sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3"> </div>
                            </button>
                        </li>
                        <li>
                            <button className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#38BDF8]">
                                <div className="sm:w-0.5 sm:h-full  bg-[#1d2c45]"> </div>
                                <div className="sm:pl-4 sm:pb-0 pt-2 sm:pt-0">MITRE</div>
                                <div className="sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3"> </div>
                            </button>
                        </li>
                    </ol>
                </div>

                <div className="poppins-custom pt-14 mt-1 text-lg text-[#bed2fc] pl-4">
                    Software Engineer Intern @ NASA
                </div>
            </div>

          </div>
      </div>
    );
  }