import Header from "../components/Header";
import PlayerCard from "../components/PlayerCard";
import TeamCard from "../components/TeamCard";

import { teams } from "../db/db";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="pt-[80px]">
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team.name} image={team.image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
