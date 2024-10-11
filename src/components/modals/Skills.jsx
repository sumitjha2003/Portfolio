import React from 'react';

const Skills = ({ skill, index }) => {
  return (
    <div key={index} className="border relative p-4 rounded mb-3">
      <div className="flex flex-row justify-evenly gap-4 place-content-center">
        {/* Div for the logo */}
        <div>
          <img
            src={skill.logo}
            alt={`${skill.name} Logo`}
            className="w-25 h-16 mb-3"
          />
        </div>
        {/* Div for the skill name */}
        {/* <div className="text-2xl my-auto font-semibold">
          {skill.name}
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
