import React, { useEffect } from "react";

const PlayerCard = ({ name, image, rank }) => {
  useEffect(() => {
    console.log(image);
  }, []);
  return (
    <div className="flex flex-col gap-2 text-center justify-center items-center">
      <img
        src={image}
        alt={name}
        className="rounded-full w-32 h-32 object-cover"
      />
      <p className="font-semibold">{name}</p>
      <span>Rank: {rank}</span>
    </div>
  );
};

export default PlayerCard;
