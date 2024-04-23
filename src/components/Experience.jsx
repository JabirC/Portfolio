import React, { useState, useEffect } from "react";

export default function Experience() {
    const [company, setCompany] = useState("DataAnnotation");

    

    return (
      <div className="flex min-h-screen flex-col items-center md:pl-24 sm:p-14 pt-14 pl-14 pb-14 pt-24">

            <div className=" w-full text-left md:w-full md:max-w-2xl">
                <div className="text-xl flex flex-row items-center space-x-2"> <div className="text-[#38BDF8]">02.</div> 
                <div className="poppins-custom text-xl md:text-3xl sm:text-2xl text-[#bed2fc] font-medium">  Where I've Worked</div>
            </div>

            <div className="flex sm:flex-row flex-col ">
                <div className="poppins-custom justify-center text-[#8892b0] text-xs font-normal tracking-widest pt-14">
                    <ol className="flex sm:flex-col flex-row  overflow-x-auto whitespace-no-wrap"> 
                        <li>
                            <button onClick={()=>setCompany('DataAnnotation')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#64FFDA]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "DataAnnotation"? "bg-[#64FFDA]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "DataAnnotation"? "text-[#64FFDA]":""}`}>DataAnnotaion</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "DataAnnotation"? "bg-[#64FFDA]":""}`}> </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>setCompany('Headstarter')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#64FFDA]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "Headstarter"? "bg-[#64FFDA]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "Headstarter"? "text-[#64FFDA]":""}`}>Headstarter</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "Headstarter"? "bg-[#64FFDA]":""}`}> </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>setCompany('NASA')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#64FFDA]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "NASA"? "bg-[#64FFDA]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "NASA"? "text-[#64FFDA]":""}`}>NASA</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "NASA"? "bg-[#64FFDA]":""}`}> </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>setCompany('MITRE')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#64FFDA]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "MITRE"? "bg-[#64FFDA]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "MITRE"? "text-[#64FFDA]":""}`}>MITRE</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "MITRE"? "bg-[#64FFDA]":""}`}> </div>
                            </button>
                        </li>
                    </ol>
                </div>

                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] pl-4 sm:pr-0 pr-14 ${company === "DataAnnotation"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Intern <div className="text-[#64FFDA] pl-2">@ DataAnnotation</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> January 2024 — Present</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] pl-4 sm:pr-0 pr-14 ${company === "Headstarter"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Fellow<div className="text-[#64FFDA] pl-2">@ Headstarter</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> May — August 2022</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] pl-4 sm:pr-0 pr-14 ${company === "NASA"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Intern <div className="text-[#64FFDA] pl-2">@ NASA</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> August — December 2021</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] pl-4 sm:pr-0 pr-14 ${company === "MITRE"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">Software Engineer Intern <div className="text-[#64FFDA] pl-2">@ MITRE</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> June — September 2021</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64FFDA]">▹</div> 
                                <div>Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps</div>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

          </div>
      </div>
    );
  }