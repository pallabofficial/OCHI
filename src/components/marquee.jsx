import React from "react";

let marquee = () => {
  return (
    <div className="w-full  bg-[#004D43] flex items-center py-[5vw] rounded-tl-[20px] rounded-tr-[20px]">
      <div className = " flex gap-[1vw] border-t-[1px] border-b-[1px] px-[-10vh] border-[#4D837C] overflow-hidden whitespace-nowrap ">
        {Array(3).fill().map((_, index) => (
            
              <h1 className="text-[16vw] leading-none text-white font-bold mb-[-4vh] ">WE ARE OCHI</h1>
            
          ))}
      </div>
      
    </div>
  );
};
export default marquee;
