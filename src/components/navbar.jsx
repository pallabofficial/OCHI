import React from 'react'

let navbar = () => {
  return (
    <div className="w-full px-20 py-8 flex justify-between " id="navbar">
        <div><h1 className="text-white text-2xl">logo</h1></div>
        <div className="flex items-center "id="nav-items">
            {["Home", "About", "Insights", "products", "contact us"].map((item,index)=>
                <a key={index} className={`text-md font-semibold text-white mx-8 ${index===4?'ml-32':(undefined)} `}>{item}</a>
            
            )}
        </div>

    </div>
  )
}
export default navbar;