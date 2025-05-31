import React from "react";
import { Skills } from "../constants";
import TitleHeader from "../components/TitleHeader";

const OtherSkills = () => {
  return (
    <>
      {/* <TitleHeader
        // title="Other Skills & Technologies"
        sub="💡 Additional tools I'm comfortable working with"
      /> */}
      <div className="w-full padding-x-lg mt-12">
        <div className="mx-auto grid-3-cols gap-6">
          {Skills.map(({ category, stack }) => (
            <div
              key={category}
              className="card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <h3 className="text-white text-2xl font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {stack.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 bg-white/5 p-2 rounded-lg"
                  >
                    <img src={icon} alt={name} className="w-6 h-6" />
                    <span className="text-white text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherSkills;
