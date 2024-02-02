import { Link } from "react-router-dom";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";

import { teams, players } from "../db/db";
import { useEffect } from "react";

const Teams = () => {
  useEffect(() => {
    const ranking = players.map((player) => player.rank);
    console.log(ranking + "");
  }, []);

  return (
    <main>
      <Header />
      <div className="pt-[80px]">
        <div className="max-w-7xl mx-auto p-4 flex justify-center">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {teams.map((team) => (
              <Link to={`/times/${team.name}`}>
                <TeamCard key={team.id} team={team.name} image={team.image} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Teams;
