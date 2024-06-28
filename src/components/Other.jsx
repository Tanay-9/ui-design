import React from "react";
import { applicant, del, matches, sideMsg, pen, views } from "../assets";
const Other = () => {
  const data = [
    {
      image: applicant,
      title: "Applicants",
      quantity: 400,
    },
    {
      image: matches,
      title: "Matches",
      quantity: 100,
    },
    {
      image: sideMsg,
      title: "Messages",
      quantity: 147,
    },
    {
      image: views,
      title: "Views",
      quantity: 800,
    },
  ];

  return (
    <>
      <div className="border-r border-b-0 border-l-0 border-gray-200 shadow-sidebar w-full xl:w-[25%]">
        <div className="md:p-4 xl:p-8 flex flex-col md:gap-4 xl:gap-8">
          <div className="flex gap-4 items-center xl:w-[360px]">
            <div className="flex items-center p-2 xl:py-3 xl:px-6  gap-[10px] border-[0.8px] border-primary rounded-xl xl:w-44 justify-center">
              <img src={del} alt="delete job" />
              <p className="text-primary text-xs lg:text-[16px]">Delete job</p>
            </div>
            <div className="flex items-center gap-[10px] p-2 xl:py-3 xl:px-6 rounded-xl bg-primary border-2 border-[rgba(254, 211, 202, 1)] xl:w-44 justify-center">
              <img src={pen} alt="pen" />
              <p className="text-xs text-white xl:text-[16px]">Edit Job</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 xl:w-[360px]">
            {data.map((ele, i) => (
              <div  key={i} className="flex justify-between items-center xl:w-[336px]">
                <div className="flex items-center gap-[10px]">
                  <img src={ele.image} />
                  <p className="text-xs xl:text-[20px] font-medium text-gray-600">
                    {ele.title}
                  </p>
                </div>
                <p className="text-xs xl:text-2xl font-bold text-gray-900">{ele.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
