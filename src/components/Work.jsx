import React, { useState, useEffect } from "react";

export default function Work() {
    return (
      <div className="flex min-h-screen flex-col items-center p-6 sm:p-14">

            <div className=" w-full text-left md:w-full md:max-w-2xl md:pl-10">
                <div className="text-xl flex flex-row items-center space-x-2"> <div className="text-[#64ffda]">03.</div> 
                 <div className="poppins-custom text-xl md:text-2xl sm:text-2xl text-[#bed2fc] font-medium">  Projects</div>
                </div>

                <ol>
                    <li>AdventChess</li>
                    <li>MealMap</li>
                    <li>Sojourn</li>
                </ol>
          </div>
      </div>
    );
  }