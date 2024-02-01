import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Team = () => {
  const { team } = useParams();

  return (
    <section>
      <Header />
      <div className="pt-[80px]">
        <div className="max-w-7xl mx-auto p-4">
          <p>Team {team}</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
