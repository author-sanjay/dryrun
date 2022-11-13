import React from "react";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import Homeleft from "../Home/Homeleft";
import HomeLefterror from "../Home/HomeLefterror";
import ProblemsList from "./ProblemsList";

const Problems = () => {
  const user=useSelector((state)=>state.user);
  return (
    <div className="px-6 flex justify-center items-center">
      <div className="max-w-[1480px] w-full">
        <section id="problem" className="flex flex-row py-12">
          {user==null?<HomeLefterror/>:<Homeleft/>}
          
          <ProblemsList/>
        </section>
      </div>
    </div>
  );
};

export default Problems;
