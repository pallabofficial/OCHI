import React from 'react'

let navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-[3vw] py-[5vh] flex justify-between items-center" id="navbar">
        <div><h1 className="text-white text-[1.4vw]">logo</h1></div>
        <div className="flex items-center "id="nav-items">
            {["Home", "About", "Insights", "products", "contact us"].map((item,index)=>
                <a key={index} className={`text-[1.4vw] font-semibold text-white mx-[1.5vw] ${index===4 &&'ml-[10vw]'} `}>{item}</a>
            
            )}
        </div>

    </div>
  )
}
export default navbar;