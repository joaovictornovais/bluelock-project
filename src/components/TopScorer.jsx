import { teams } from "../db/db";

const TopScorer = ({ selection }) => {
  const selectionTeams = teams.filter((team) => team.selection === selection);

  return (
    <div className="text-xs">
      {selectionTeams.map((team, i) => (
        <p key={i}>
          Artilheiro {team.name}:{" "}
          <span className="font-semibold">{team.topScorer}</span>
        </p>
      ))}
    </div>
  );
};

export default TopScorer;
