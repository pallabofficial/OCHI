import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

let banner = () => {
  return (
    <div className="w-full min-h-screen bg-black pt-[0.1vh]">
      <div id="banner-text" className="mt-[25vh] px-[3vw] ">
        {['WE CREATE', 'EYE OPENING', 'PRESENTATIONS'].map((value,index)=>{
          return (    
            <div id="banner-text-each" className="flex items-center gap-[1vw]">
              {index===1 && (<div id="banner-text-img" className="w-[10vw] h-[6vw] bg-red-600 rounded-md"></div>)}
              <h1 key={index } className="text-[white] text-[8vw] leading-[17vh] tracking-[-0.5vw] font-bold ">
            {value}
              </h1>
            </div>
            
          )})}      
      </div>

      <div className="border-t-[1px] mt-[15vh] border-white flex justify-between items-center px-[3vw] py-[2vh]"   id="banner-footer">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
          <a key={index} className="text-[1.3vw] tracking-[0vw] leading-none text-white" >{item}</a>
        ))}
        <div id="banner-footer-btn" className="flex gap-3 items-center">
          <div className="px-4 py-2 border-[2px] border-white rounded-full text-white  "><p className="text-[1vw]">START THE PROJECT</p></div>
          <div className="w-10 h-10 rounded-full border-white border-[1px] text-white flex justify-center items-center text-[1.3vw]"><span className = "rotate-45"><FaLongArrowAltUp /></span></div>
        </div>
      </div>
    </div>
  );
};
export default banner;
