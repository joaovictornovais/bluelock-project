import { Link } from "react-router-dom";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";

import { teams } from "../db/db";
import Selections from "../components/Selections";

const Teams = () => {
  return (
    <main>
      <Header />
      <div className="pt-[80px]">
        <div className="max-w-7xl mx-auto p-4 flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4 px-2 lg:flex-row lg:items-start">
            <Selections selection="first">Primeira Seleção</Selections>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {teams.map((team) => (
                <Link to={`/times/${team.name}`}>
                  <TeamCard key={team.id} team={team.name} image={team.image} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Teams;
