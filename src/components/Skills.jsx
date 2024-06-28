import React from "react";
import { adobe_ai, adobe_xd, figma } from "../assets";

const Skills = () => {
  const skills = [
    {
      link: figma,
      title: "Figma",
    },
    {
      link: adobe_ai,
      title: "Adobe Illustrator",
    },
    {
      link: adobe_xd,
      title: "Adobe XD",
    },
  ];

  const details = [
    {
      title: "Preferred Language",
      desc: "English",
    },
    {
      title: "Type",
      desc: "Full time",
    },
    {
      title: "Years of Experience",
      desc: "3+ Years of Experience",
    },
  ];

  return (
    <div className="w-full border-y">
      <div className="py-7 flex gap-20 xl:w-[872px]">
        <div className="flex flex-col gap-4">
          <p className="text-gray-500 text-xl">Skills Required</p>
          {skills.map((ele, i) => (
            <div
              key={i}
              className="flex gap-2 border px-2 py-1 rounded-md w-fit"
            >
              <img src={ele.link} alt="figma" className="w-fit" />
              <p className="text-xs xl:text-[14px] font-semibold">
                {ele.title}
              </p>
            </div>
          ))}
        </div>

        {details.map((ele, i) => (
          <div key={i} className="flex flex-col gap-2 xl:gap-4">
            <p className="text-gray-500 text-[14px] xl:text-xl">
              {ele.title}
            </p>
            <p className="text-gray-700 text-[14px] xl:text-[16px] font-bold">
              {ele.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
