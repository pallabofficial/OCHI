import React from "react";

let projects = () => {
  return (
    <div className=" w-full flex-col justify-center items-center gap-[10vh] px-[3vw] ">
      <div id="projects-headline" className="w-[98%] flex ">
        <h1 className="text-[4vw] text-white"> Featured Projects</h1>
      </div>

      {/* ----------------------------------------projects-section------------------------------------------------------ */}

      <div id="projects-showcase" className="w-[98%] flex flex-wrap justify-between  ">
        {[
          { title: "FYDE", image: "../public/images/project-1-img.jpg", viewProject: "", about: "" },
          { title: "VICE", image: "../public/images/project-2-img.jpg", viewProject: "", about: "" },
          { title: "TRAWA", image: "../public/images/project-3-img.jpg", viewProject: "", about: "" },
          { title: "PREMIUM BLEND", image: "../public/images/project-4-img.jpg", viewProject: "", about: "" },
        ].map((project, projectNo) => (
          
          <div key={projectNo} className="w-[49%] flex-col justify-between items-between  gap-[10vw] ">
            <div id="project-title" className="w-full flex gap-[1vw] items-center justify-start py-[5vh] ">
                <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                <p className="text-white" >{project.title}</p>
            </div>
            <div id="project-img-div" className="w-full h-[80vh]   overflow-hidden">
                <div id="img-wrapper" className="w-[100%] h-[100%] rounded-[10px] overflow-hidden  hover:scale-90 transition duration-[500ms] ease-in-out">
                    <img className="object-cover w-full h-full" src={project.image} alt="" />
                </div>
            </div>
            <div id="project-links-div" className="w-full flex justify-end gap-[1vw] py-[5vh] px-[1vw]">
                <div className="w-[20%] h-[7vh] border-white border-[2px] rounded-full flex justify-center items-center" ><a className="text-white"href="#">View Project</a></div>
                <div className="w-[20%] h-[7vh] border-white border-[2px] rounded-full flex justify-center items-center" ><a className="text-white"href="#">About</a></div>
                
            </div>
          </div>
        ))}
      </div>

      <div id="view-all-btn-sec"></div>
    </div>
  );
};
export default projects;
