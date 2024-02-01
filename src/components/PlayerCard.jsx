const PlayerCard = ({ name, image, rank }) => {
  return (
    <div className="flex flex-col gap-1 text-center justify-center items-center cursor-pointer p-8 bg-zinc-100 group rounded-md">
      <div className="overflow-hidden rounded-full shadow-2xl">
        <img
          src={image}
          alt={name}
          className="rounded-full w-32 h-32 object-cover group-hover:scale-110 transition-all"
        />
      </div>
      <p className="font-semibold group-hover:text-blue-700">{name}</p>
      <span className="text-sm text-gray-600">Rank: {rank}</span>
    </div>
  );
};

export default PlayerCard;
