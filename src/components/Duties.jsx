import React from "react";

const Duties = () => {
  return (
    <>
      <div className="border-b">
        <div className="py-7 flex flex-col w-[526px] gap-2 text-[16px]">
          <p className="text-gray-500">About the job</p>
          <div className="flex flex-col gap-3">
            <ol className="list-decimal list-inside">
              <li>Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related
                works
              </li>
            </ol>
            <div>
              <p className="text-[16px]">Benefits:</p>
              <ol className="list-disc list-inside ml-1">
                <li>Health insurance</li>
                <li>Provident Fund</li>
              </ol>
            </div>

            <div>
              <p className="text-[16px]">Schedule:</p>
              <ol className="list-disc list-inside ml-1">
                <li>Day Shift</li>
              </ol>
            </div>

            <div>
              <p className="text-[16px]">Supplemental pay types:</p>
              <ol className="list-disc list-inside ml-1">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ol>
            </div>

            <div>
            <p className="text-[16px]">Work Location : In Person</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Duties;
