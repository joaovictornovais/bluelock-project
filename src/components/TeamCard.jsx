import React from "react";

const TeamCard = ({ team, image }) => {
  return (
    <div
      className={`relative w-[300px] h-[200px] bg-[url("${image}")] bg-cover flex items-end rounded-xl`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-700/60 from-40% to-zinc-100/10 flex justify-center items-center rounded-xl">
        <p className="text-zinc-100 font-bold text-2xl">{`Team ${team}`}</p>
      </div>
    </div>
  );
};

export default TeamCard;
