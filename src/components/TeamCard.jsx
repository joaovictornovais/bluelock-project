import React from "react";

const TeamCard = ({ team, image, selection }) => {
  return (
    <div className="relative inline-block cursor-pointer">
      <div className="h-[230px] w-full relative rounded-xl overflow-hidden group">
        <img
          src={image}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/70 from-10%% to-transparent" />
      </div>
      <p className="absolute bottom-4 text-2xl text-zinc-100 font-semibold left-1/2 transform translate-x-[-50%] drop-shadow-2xl bg-white/10 rounded-full px-4 py-2 backdrop-filter backdrop-blur">
        Time {team}
      </p>
    </div>
  );
};

export default TeamCard;
