import React from "react";
import { skills } from "../constants/skills"
import cross from "../../assets/cross.svg";
import Skills from "./Skills";

const SkillModal = (props) => {
  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full !mt-0 grid place-items-center overflow-auto">
      <div className="relative backdrop-blur-sm py-8 text-white border bg-gray-500 border-black w-full ">
        <img
          src={cross}
          alt="Close"
          className="absolute top-5 right-5 w-5 h-5"
          onClick={() => props?.setIsSkillModalOpen(false)}
        />

        {/* If you want to make the similar modals for others just change the content below and in other file and the above onclick function too :) */}
        <div className="text-2xl font-bold text-center border-b mx-10 pb-4"></div>
        <div className="p-5">
          {skills.map((skill, index) => (
            <Skills skill={skill} index={index}/>
            
          ))}
        
        </div>
        <div className="mx-auto items-center place-content-center w-[50%] ">
          <button
            onClick={() => props?.setIsSkillModalOpen(false)}
            className="mt-4 p-2 w-full mx-auto bg-black text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
