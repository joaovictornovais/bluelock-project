import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ team, image }) => {
  return (
    <Link
      to={`/times/${team}`}
      className="relative inline-block cursor-pointer"
    >
      <div className="h-[230px] max-w-[400px] relative rounded-xl overflow-hidden group">
        <img
          src={image}
          className="h-full max-w-[400px] object-cover group-hover:scale-110 transition-all duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/70 from-10%% to-transparent" />
      </div>
      <p className="absolute bottom-4 text-2xl text-zinc-100 font-semibold left-1/2 transform translate-x-[-50%] drop-shadow-2xl bg-white/10 rounded-full px-4 py-2 backdrop-filter backdrop-blur text-center">
        Time {team}
      </p>
    </Link>
  );
};

export default TeamCard;
