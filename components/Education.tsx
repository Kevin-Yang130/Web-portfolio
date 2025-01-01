import React from "react";
import { Timeline } from "./ui/TimeLine";

const Education = () => {
  const data = [
    {
      title: "April 2023",
      content: (
        <div>
          <h1 className=" mb-8 text-xl">
            Decided to transfer to the University of Pennsylvania to study
            Computer Science and Economics. Saw snow for the first time and
            finally enjoyed having a China Town to go for spontanous cravings
            throughout the day.
          </h1>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "August 2022",
      content: (
        <div>
          <h1 className="mb-8 text-xl">
            Kicked off my first year as a Computer Science major at the
            University of Florida. Teamed up with NASA for research, became a
            Teaching Assistant for Prog. Fundamentals 2 (helping students win
            arguments with their compilers), and joined volunteering
            organizations to help international students navigate the American
            education system. Safe to say, I kept myself busy!
          </h1>
          <div className="grid grid-cols-2 gap-4"></div>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-xl">Goals:</div>
            <div className="flex gap-2 items-center text-xl">
              ✅ Become a teaching Assistant
            </div>
            <div className="flex gap-2 items-center text-xl">
              ✅ Perfom Research
            </div>
            <div className="flex gap-2 items-center text-xl">
              ✅ Created unforgettable memories and lifelong friendships
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "March 2013",
      content: (
        <div>
          <h1 className="mb-8 text-xl">
            Moved the U.S. from Peru with my sister for better opportunities and
            education. Said bye to delicious Peruvian Ceviche, dear friends, and
            family for a new beginning.
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl font-normal mb-8"></p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mb-6 py-20">
      <div className="heading">Education</div>
      <Timeline data={data} />
    </div>
  );
};

export default Education;
