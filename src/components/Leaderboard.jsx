import { useEffect, useState } from "react";
import { teams as teamsDb } from "../db/db";

const Leaderboard = ({ selection }) => {
  const [teams, setTeams] = useState([]);

  const handleTeamsSelection = (selection) => {
    const filtered = teamsDb.filter((team) => team.selection === selection);

    return [...filtered].sort((a, b) => b.points - a.points);
  };

  useEffect(() => {
    setTeams(handleTeamsSelection(selection));
  }, []);

  return (
    <table className="text-center border-collapse border border-slate-300">
      <thead>
        <tr>
          <th className="border border-slate-300">Time</th>
          <th className="border border-slate-300">V</th>
          <th className="border border-slate-300">D</th>
          <th className="border border-slate-300">E</th>
          <th className="border border-slate-300">Pontos</th>
        </tr>
      </thead>
      <tbody className="">
        {teams.map((team, i) => (
          <tr key={i} className={i < 2 ? "bg-green-200" : "bg-red-100"}>
            <td className="border border-slate-300">{team.name}</td>
            <td className="border border-slate-300">{team.wins}</td>
            <td className="border border-slate-300">{team.loses}</td>
            <td className="border border-slate-300">{team.draw}</td>
            <td className="border border-slate-300 font-semibold">
              {team.points}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
