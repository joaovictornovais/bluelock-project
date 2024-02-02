import React from "react";

import { teams, players } from "../db/db";

const Selections = ({ children, selection }) => {
  const selectionTeams = teams.map((team) => {
    if (team.selection === selection) return team.name;
  });

  const handlePlayersAmount = () => {
    const selectionPlayers = players.filter((player) =>
      selectionTeams.includes(player.team)
    );

    return selectionPlayers.length;
  };

  const handlePlayersRanking = () => {
    const selectionPlayers = players.filter((player) =>
      selectionTeams.includes(player.team)
    );
    const rankings = selectionPlayers.map((player) => player.rank);
    rankings.sort();

    return [rankings[0], rankings[rankings.length - 1]];
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-2xl lg:text-4xl">{children}</h2>
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-medium">{handlePlayersAmount()}</span> Jogadores
        </p>
        <div>
          <p>
            Menor ranking:{" "}
            <span className="font-medium">{handlePlayersRanking()[0]}</span>{" "}
          </p>
          <p>
            Maior ranking:{" "}
            <span className="font-medium">{handlePlayersRanking()[1]}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Selections;
