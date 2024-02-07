import React from "react";
import Header from "../components/Header";

const Matches = () => {
  return (
    <>
      <Header />
      <div className="pt-[80px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="text-center">
              <h2>Time W</h2>
              <p>3</p>
            </div>
            <p>vs.</p>
            <div className="text-center">
              <h2>Time X</h2>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;
