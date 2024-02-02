import { Link } from "react-router-dom";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";

import { teams } from "../db/db";
import Selections from "../components/Selections";

const Teams = () => {
  const handleTeamsSelection = (selection) => {
    const firstSelectionTeams = teams.filter(
      (team) => team.selection === selection
    );
    return firstSelectionTeams;
  };

  return (
    <main>
      <Header />
      <div className="pt-[80px]">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-5 max-w-7xl mx-auto p-6 gap-4">
            <Selections selection="first">Primeira Seleção</Selections>
            <div className="col-span-4">
              <div className="grid grid-cols-3 gap-4">
                {handleTeamsSelection("first").map((team) => (
                  <TeamCard
                    key={team.id}
                    selection={team.selection}
                    image={team.image}
                    team={team.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Teams;
