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
      <div className="border-r border-b-0 border-l-0 border-gray-200 shadow-sidebar lg:w-1/4 xl:w-1/4 max-w-full overflow-hidden w-full">
        <div className="md:p-4 flex flex-col md:gap-4 xl:gap-8 justify-center lg:justify-start">
          <div className="flex gap-2 xl:gap-4 items-center justify-center xl:w-full">
            <div className="flex items-center p-2 xl:py-3 xl:px-6 gap-[10px] border-[0.8px] border-primary rounded-xl xl:w-42 justify-center">
              <img src={del} alt="delete job" />
              <p className="text-primary text-xs xl:text-[16px]">Delete job</p>
            </div>
            <div className="flex items-center gap-[10px] p-2 xl:py-3 xl:px-6 rounded-xl bg-primary border-2 border-[rgba(254, 211, 202, 1)] xl:w-42 justify-center">
              <img src={pen} alt="pen" />
              <p className="text-xs xl:text-[14px]">Edit Job</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full overflow-hidden">
            {data.map((ele, i) => (
              <div
                key={i}
                className="flex justify-between items-center w-full xl:max-w-[336px]"
              >
                <div className="flex items-center gap-[10px]">
                  <img src={ele.image} className="max-w-full" />
                  <p className="text-xs xl:text-[16px] font-medium text-gray-600">
                    {ele.title}
                  </p>
                </div>
                <p className="text-xs xl:text-[20px] text-gray-900">
                  {ele.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
