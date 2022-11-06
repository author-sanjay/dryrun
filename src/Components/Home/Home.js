
import React from "react";

import Homeleft from "./Homeleft";
import Homeright from "./Homeright";
const Home = () => {
  return (
    <section id="home" className="flex flex-row py-12">
      <Homeleft/>
      <Homeright/>
    </section>
  );
};

export default Home;
