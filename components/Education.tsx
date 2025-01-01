import React from "react";
import { Timeline } from "./ui/TimeLine";

const Education = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h1 className="">University of Pennsylvania</h1>
          <div className="grid grid-cols-2 gap-4"> {/* images */}</div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <div className="heading">Education</div>
      <Timeline data={data} />
    </div>
  );
};

export default Education;
