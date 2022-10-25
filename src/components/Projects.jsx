import React from "react";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-primary"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-400">
            Projects
          </p>
          <p className="py-6">Check out my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          {projects.map((project) => (
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover effects here */}
              <div className="opacity-0 group-hover:opacity-100">
                <div className="flex flex-col p-4">
                  <h1 className="text-2xl font-bold text-white tracking-wider">
                    {project.title}
                  </h1>
                  <p className="">{project.description}</p>
                </div>

                {project.source && (
                  <div className="pt-8 text-center">
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Grid item ends */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
