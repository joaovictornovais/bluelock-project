const PlayerCard = ({ name, image, rank, qualed, topScorer }) => {
  return (
    <div
      className={
        qualed || topScorer === name
          ? "flex flex-col gap-1 text-center justify-center items-center cursor-pointer p-8 bg-green-100 group rounded-md"
          : "flex flex-col gap-1 text-center justify-center items-center cursor-pointer p-8 bg-red-100 group rounded-md"
      }
    >
      <div className="overflow-hidden rounded-full shadow-2xl">
        <img
          src={image}
          alt={name}
          className="rounded-full w-24 h-24 object-cover group-hover:scale-110 transition-all"
        />
      </div>
      <p className="font-semibold group-hover:text-blue-700">{name}</p>
      <span className="text-sm text-gray-600">Rank: {rank}</span>
    </div>
  );
};

export default PlayerCard;
