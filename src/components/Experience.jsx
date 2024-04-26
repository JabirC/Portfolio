import React, { useState, useEffect } from "react";

export default function Experience() {
    const [company, setCompany] = useState("DataAnnotation");

    

    return (
      <div id="experience" className="flex mb-48 flex-col items-center pl-6 pt-6 pr-6  sm:pl-14 sm:pt-14 sm:pr-14  md:pl-24">

            <div className=" w-full text-left md:w-full md:max-w-2xl">
                <div className="text-xl flex flex-row items-center space-x-2"> <div className="text-[#64ffda]">01.</div> 
                <div className="poppins-custom text-xl md:text-2xl sm:text-2xl text-[#bed2fc] font-medium">  Where I've Worked</div>
            </div>

            <div className="flex sm:flex-row flex-col ">
                <div className="poppins-custom justify-center text-[#8892b0] text-xs font-normal tracking-widest pt-14">
                    <ol className="flex sm:flex-col flex-row  overflow-x-auto whitespace-no-wrap"> 
                        <li>
                            <button onClick={()=>setCompany('DataAnnotation')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#64ffda]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "DataAnnotation"? "bg-[#64ffda]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "DataAnnotation"? "text-[#64ffda]":""}`}>DataAnnotaion</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "DataAnnotation"? "bg-[#64ffda]":""}`}> </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>setCompany('Headstarter')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left w-36 h-10 hover:bg-[#112240] hover:text-[#64ffda]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "Headstarter"? "bg-[#64ffda]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "Headstarter"? "text-[#64ffda]":""}`}>Headstarter</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "Headstarter"? "bg-[#64ffda]":""}`}> </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>setCompany('NASA')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left md:w-36 w-24 h-10 hover:bg-[#112240] hover:text-[#64ffda]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "NASA"? "bg-[#64ffda]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "NASA"? "text-[#64ffda]":""}`}>NASA</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "NASA"? "bg-[#64ffda]":""}`}> </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>setCompany('MITRE')} className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left md:w-36 w-24 h-10 hover:bg-[#112240] hover:text-[#64ffda]">
                                <div className={`sm:w-0.5 sm:h-full  bg-[#1d2c45] ${company === "MITRE"? "bg-[#64ffda]":""}`}> </div>
                                <div className={`sm:pl-4 sm:pb-0 pt-2 sm:pt-0 ${company === "MITRE"? "text-[#64ffda]":""}`}>MITRE</div>
                                <div className={`sm:hidden w-full h-0.5  bg-[#1d2c45] mt-3 ${company === "MITRE"? "bg-[#64ffda]":""}`}> </div>
                            </button>
                        </li>
                    </ol>
                </div>

                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] md:pl-4 sm:pr-0 pr-6 ${company === "DataAnnotation"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Intern <div className="text-[#64ffda] pl-2">@ DataAnnotation</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> January 2024 — Present</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Trained 4+ LLM models for code generation by developing prompts and solutions, achieving 95% completion rate</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Evaluated code quality produced by LLM for correctness, performance, and helpfulness for 300+ tasks</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Ensured high code quality in code reviews for 10+ engineers, making sure submissions followed style guidelines</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] md:pl-4 sm:pr-0 pr-6 ${company === "Headstarter"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Fellow<div className="text-[#64ffda] pl-2">@ Headstarter</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> May — August 2022</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Selected for a full-stack JavaScript + AWS program as one of 50 fellows out of 700+ applicants</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Built serverless APIs with at least 99.95% uptime using AWS Lambda and managed data with Dynamo DB</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Leveraged knowledge: Git workflows, testing, CI/CD, agile development, MVC pattern, APIs/Microservices</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] md:pl-4 sm:pr-0 pr-6 ${company === "NASA"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Intern <div className="text-[#64ffda] pl-2">@ NASA</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> August — December 2021</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Built a Python program to identify intersections in geospatial data collected by 3 satellites with varying resolutions</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Developed scripts to merge 2+ terabytes of intersected satellite data, facilitating ease of access for scientists</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Optimized scripts to handle large data volumes through multithreading, achieving 80% decrease in processing time</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={`pt-14 mt-1 text-lg text-[#bed2fc] md:pl-4 sm:pr-0 pr-6 ${company === "MITRE"? "":"hidden"}`}>
                    <div className="flex flex-row poppins-custom">SWE Intern <div className="text-[#64ffda] pl-2">@ MITRE</div></div>
                    <div className="text-xs tracking-widest text-[#8892b0] pt-2"> June — September 2021</div>
                    <div className="pt-6 text-[#8892b0] text-sm">
                        <ul className="space-y-4 poppins-custom"> 
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Created a microservice in Python for generating metadata for a data pipeline, enabling comprehensive data analysis</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Integrated 3+ NLP microservices into the pipeline while maintaining 90% efficiency through multithreading</div>
                            </li>
                            <li className=" flex flex-row space-x-4">
                                <div className="text-md text-[#64ffda]">▹</div> 
                                <div>Optimized transfer of MongoDB data into a Neo4J database using indexing, improving query performance by 60%</div>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

          </div>
      </div>
    );
  }