import React, { useState, useEffect } from "react";

export default function Contact() {
    return (
      <div id="contact" className="flex flex-col items-center  p-6  mt-40 mb-52">

            <div className=" w-full text-center max-w-2xl  w-full   flex flex-col items-center justify-center">
                <div className="text-md flex flex-row items-center justify-center space-x-2 mb-6"> <div className="text-[#64ffda]">03.</div> 
                 <div className="poppins-custom text-md md:text-lg sm:text-lg text-[#64ffda] font-light">  What's next?</div>
                </div>

                <div className="poppins-custom text-4xl md:text-5xl sm:text-5xl text-[#bed2fc] font-semibold mb-6">Get In Touch</div>
                
                <div className="line-height-custom-contact poppins-custom  text-[#8892b0] text-sm  pl-6 pr-6 font-light tracking-widest mb-8"> 
                I am currently actively seeking new opportunities as a full-stack or backend software engineer. Feel free to reach out if you have any questions or just want to say hi!
               </div>
               <div className="flex relative text-[#64ffda] ">
                    <button className="relative z-10 h-14 w-32 border border-[#64ffda] bg-[#0a192f] rounded-md  text-sm transition-all duration-300 transition-transform transform hover:-translate-y-1 hover:-translate-x-1" onClick={()=>window.location.href = 'mailto:jabirchowdhury21@gmail.com'}>Say Hello</button>
                    <div className="absolute top-0  bg-[#64ffda] w-32 h-14 z-1 rounded-md"></div>
               </div>
          </div>
      </div>
    );
  }