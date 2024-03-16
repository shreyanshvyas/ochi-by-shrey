import React from 'react'

function Cards() {
  return (
    <>
    <div className="w-full px-20 border-b-[1px] border-zinc-700"></div>
    <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#004D43]">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="OCHI" />
                <button className="absolute px-5 py-1 rounded-full border-2 border-[#CDEA68] left-10 bottom-10 text-[#CDEA68]">&copy; 2024</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#0c1413]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="clutch" />
                <button className="absolute px-5 py-1 rounded-full border-2 left-5 bottom-10 ">RATING 5-STAR ON CLUTCH</button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="bootcamp alumni" />
                <button className="absolute px-5 py-1 rounded-full border-2 left-4 bottom-10 tracking-tighter">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>

    </div>
    </>
  )
}

export default Cards