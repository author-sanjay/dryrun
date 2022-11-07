import React from "react";
import Home from "../Home/Home";
import Homeleft from "../Home/Homeleft";
import ProblemsList from "./ProblemsList";

const Problems = () => {
  return (
    <div className="px-6 flex justify-center items-center">
      <div className="max-w-[1480px] w-full">
        <section id="home" className="flex flex-row py-12">
          <Homeleft/>
          <ProblemsList/>
        </section>
      </div>
    </div>
  );
};

export default Problems;
