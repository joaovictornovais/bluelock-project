import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import { players as dbPlayers } from "../db/db";
import PlayerCard from "../components/PlayerCard";

const Team = () => {
  const { team } = useParams();

  const players = dbPlayers.filter((playerTeam) => playerTeam.team === team);

  const handleAverageRank = () => {
    const sum = players.reduce((a, b) => a + b.rank, 0);
    const quantity = players.reduce((a) => a + 1, 0);
    return (sum / quantity).toFixed(0);
  };

  return (
    <section>
      <Header />
      <div className="pt-[80px]">
        <div className="max-w-7xl mx-auto p-4 flex flex-col gap-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl">Time {team}</h1>
            <h2 className="font-medium">
              Média de Rank:{" "}
              <span className="text-blue-700">{handleAverageRank()}</span>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                name={player.name}
                rank={player.rank}
                image={player.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
