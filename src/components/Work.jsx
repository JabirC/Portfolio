import React, { useState, useEffect } from "react";

export default function Work() {
    return (
      <div id="work" className="flex min-h-screen flex-col items-center  p-6 sm:p-14">

            <div className=" w-full text-left  w-full md:max-w-6xl md:pl-10 flex flex-col items-center justify-center">
                <div className="text-xl flex flex-row items-center justify-center space-x-2"> <div className="text-[#64ffda]">02.</div> 
                 <div className="poppins-custom text-xl md:text-2xl sm:text-2xl text-[#bed2fc] font-medium"> Thing's I've built</div>
                </div>

                <div className="poppins-custom flex w-full sm:flex-row flex-col sm:space-x-6 sm:space-y-0 space-y-4 pt-10"> 
                    <div className="flex flex-col space-y-6 w-full">

                        <div className="h-96 lg:h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2 hover:cursor-pointer" onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}>

                            <div className="absolute top-8 right-14"> 
                                <button className="h-6 w-6" onClick={()=>window.open('https://github.com/JabirC/AdventChess', '_blank')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" fill="none" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]" strokeWidth="1.5"><path d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6 onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"  viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </button>
                            </div>
                            {/* <button></button> */}
                            <div className="absolute top-8 pl-6 pr-6 text-xl text-[#ccd6f6] font-bold">
                                AdventChess
                            </div>
                            <div className="relative top-24 pl-6 pr-6 text-sm text-[#8892b0] font-normal">
                                A multiplayer networked Chess web application that seeks to redefine the strategic nature of the game by incorporating randomized intial start states.
                            </div>
                            <div className="flex-wrap absolute bottom-10 pl-6 pr-6 text-xs text-[#8892b0] font-normal flex flex-row items-start">
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Java</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Spring Boot</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Angular</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">JUnit</div>
                            </div>
                        </div>

                        <div className="h-96 lg:h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2 hover:cursor-pointer" onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}>

                            <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6" onClick={()=>window.open('https://github.com/JabirC/MealMap', '_blank')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" fill="none" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]" strokeWidth="1.5"><path d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6 onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"  viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </button>
                            </div> */}
                            {/* <button></button> */}
                            <div className="absolute top-8 pl-6 pr-6 text-xl text-[#ccd6f6] font-bold">
                                MealMap
                            </div>
                            <div className="relative top-24 pl-6 pr-6 text-sm text-[#8892b0] font-normal">
                            A user-friendly iOS application in Swift and UIKit, enabling seamless meal planning, recipe searching by ingredients, and personalized recipe macro calculation.
                            </div>
                            <div className="flex-wrap absolute bottom-10 pl-6 pr-6 text-xs text-[#8892b0] font-normal flex flex-row items-start">
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Swift</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">UIKit</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Core Data</div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-6 w-full">

                        <div className="h-96 lg:h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2 hover:cursor-pointer" onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}>

                            <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6" onClick={()=>window.open('https://github.com/JabirC/Sojourn', '_blank')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" fill="none" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]" strokeWidth="1.5"><path d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6 onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"  viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </button>
                            </div> */}
                            {/* <button></button> */}
                            <div className="absolute top-8 pl-6 pr-6 text-xl text-[#ccd6f6] font-bold">
                                Sojourn
                            </div>
                            <div className="relative top-24 pl-6 pr-6 text-sm text-[#8892b0] font-normal">
                             Sojourn is a gamified travel app that personalizes exploration through user authentication and a sophisticated gamification system, incentivizing engagement with levels and experience points.
                            </div>
                            <div className="flex-wrap absolute bottom-10 pl-6 pr-6 text-xs text-[#8892b0] font-normal flex flex-row items-start">
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">NodeJS</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">React Native</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">MongoDB</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Express</div>
                            </div>
                        </div>


                        <div className="h-96 lg:h-80 w-full bg-[#112240] rounded-md shadow-lg transition-transform transform hover:-translate-y-2 hover:cursor-pointer" onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}>

                            {/* <div className="absolute top-8 right-14"> 
                                <button className="h-6 w-6" onClick={()=>window.open('https://github.com/JabirC/AdventChess', '_blank')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" fill="none" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]" strokeWidth="1.5"><path d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute top-8 right-6"> 
                                <button className="h-6 w-6 onClick={()=>window.open('https://advent-chess.vercel.app', '_blank')}">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img"  viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link hover:stroke-[#64ffda]"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </button>
                            </div> */}
     
                            <div className="absolute top-8 pl-6 pr-6 text-xl  text-[#0a192f] font-bold">
                                Coming soon...
                            </div>
                            {/* <div className="relative top-24 pl-6 pr-6 text-sm text-[#8892b0] font-normal">
                                A multiplayer networked Chess web application that seeks to redefine the strategic nature of the game by incorporating randomized intial start states.
                            </div>
                            <div className="flex-wrap absolute bottom-10 pl-6 pr-6 text-xs text-[#8892b0] font-normal flex flex-row items-start">
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Java</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Spring Boot</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">JUnit</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">Angular</div>
                                <div className="border p-1 border-[#3ca48c] text-[#64ffda] flex-shrink-0 m-1">JUnit</div>
                            </div> */}
                        </div>

                    </div>
                </div>
          </div>
      </div>
    );
  }