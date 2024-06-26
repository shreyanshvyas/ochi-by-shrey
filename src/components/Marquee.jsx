import React from 'react'
import { motion } from "framer-motion";

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.00009" className='w-full py-24 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden font-['Founders_Grotesk_X_Condensed_Bold']">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear",duration:8}} className='uppercase text-[25vw] leading-none font-bold pr-16 pt-8 -mb-[7vw]'>
                We Are Ochi
            </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear",duration:8}} className='uppercase text-[25vw] leading-none font-bold pr-16 pt-8 -mb-[7vw]'>
                We Are Ochi
            </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear",duration:8}} className='uppercase text-[25vw] leading-none font-bold pr-16 pt-8 -mb-[7vw]'>
                We Are Ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee 