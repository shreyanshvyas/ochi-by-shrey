import React from "react";
import {MdOutlineArrowOutward} from 'react-icons/md'
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                    {index === 1 && (
                        <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.1vw] bg-green-500 overflow-hidden">
                          <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="logo" />
                        </motion.div>
                    )}
              <h1 className="pt-[2vw] -mb-[.6vw] uppercase text-[9vw] leading-[.6] tracking-loose font-bold font-['Founders_Grotesk_X_Condensed'] ">
                {items}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between px-20 py-5">
        {[
          "For public and private companies",
          "From the First Pitch to IPO",
        ].map((item, index) => {
          return <p className="text-md font-light"> {item}</p>;
        })}
        <div className="start flex items-center gap-5 relative -top-2">
          <div className=" px-5 py-2 border-[2px] border-zinc-500 font-lighter text-sm rounded-full">
            Start the Project
          </div>
          <div className="w-7 h-7 rounded-full border-[1px] border-zinc-500 flex items-center justify-center"><MdOutlineArrowOutward /></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
