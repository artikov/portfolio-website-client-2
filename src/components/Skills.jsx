import React from "react";
import { skills } from "../constants/constants";

const Skills = () => {
  return (
    <div name="skills" className="bg-primary text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-400">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I've several years of experience with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* skills */}
          {skills.map((skill) => (
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={skill.img} alt={skill.title} />
              <p className="my-4">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
