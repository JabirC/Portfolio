import React, { useState, useEffect } from "react";

export default function Work() {
    return (
      <div className="flex min-h-screen flex-col items-center p-12 sm:p-14">

            <div className=" w-full text-left  w-full md:max-w-6xl md:pl-10 flex flex-col items-center justify-center">
                <div className="text-xl flex flex-row items-center justify-center space-x-2"> <div className="text-[#64ffda]">03.</div> 
                 <div className="poppins-custom text-xl md:text-2xl sm:text-2xl text-[#bed2fc] font-medium">  Projects</div>
                </div>

                <div className="flex w-full sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 pt-10"> 
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2">
                            <div className="absolute top-8 left-6"> 
                                <button className="h-6 w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" fill="none" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]" strokeWidth="1.5"><path d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"  viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </button>
                            </div>

                            
                        </div>
                        <div className="h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2">

                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 w-full">
                        <div className="h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2">

                        </div>
                        <div className="h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2">

                        </div>
                    </div>
                </div>
          </div>
      </div>
    );
  }