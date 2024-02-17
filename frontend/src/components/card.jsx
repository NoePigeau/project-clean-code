import { useState } from "react";

export const Card = ({ card }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={
        "flex flex-col shadow-md shadow-slate-600 min-h-[400px] w-[334px] rounded-xl p-6 bg-blue-800 items-center justify-center h-full hover:bg-lime-600 cursor-pointer transition-all"
      }
    >
              <div className="h-10 font-bold">{isHover ? "Answer" : "Question"}</div>
      <div className="flex flex-col gap-4 items-center flex-1 justify-center">
        <div>{isHover ? card.answer : card.question}</div>
      </div>
      <div className="h-10 font-bold">{card.tag}</div>
    </div>
  );
};
