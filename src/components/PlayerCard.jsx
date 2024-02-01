const PlayerCard = ({ name, image, rank }) => {
  return (
    <div className="flex flex-col gap-1 text-center justify-center items-center ">
      <div className="overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="rounded-full w-32 h-32 object-cover hover:scale-110 transition-all"
        />
      </div>
      <p className="font-semibold">{name}</p>
      <span className="text-sm">Rank: {rank}</span>
    </div>
  );
};

export default PlayerCard;
