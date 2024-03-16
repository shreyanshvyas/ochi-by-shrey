import React from "react";
import {MdOutlineArrowOutward} from 'react-icons/md'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell prodcts, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" w-full flex gap-5 border-t-[1px] border-[#a1b562] pt-10 mt-20">
      <div className="w-1/2">
        <h1 className="text-7xl">Our approach:</h1>
        <button className="readmore flex uppercase gap-5 w-44 h-20 px-6 items-center bg-zinc-900 text-white rounded-full mt-10"><div classname=" ">Read More</div>
        <div className="arrow w-2 h-2 bg-zinc-100 rounded-full"> 
        <div className="invisible sign w-full h-full flex text-2xl items-center justify-center"><MdOutlineArrowOutward /></div>
        </div></button>
      </div>
      <div className="w-1/2 h-[60vh] rounded-3xl bg-[#a2bb48]"> </div>
      </div>
    </div>
  );
}

export default About;
