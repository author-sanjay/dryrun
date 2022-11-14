
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ClimbingBoxLoader, ClipLoader } from "react-spinners";
import base_url from "../../api/api";
import "./home.css";

import Homeleft from "./Homeleft";
import Homeright from "./Homeright";
const Home = () => {
  const [loading,setloading]=useState(false);
  const loggedin = useSelector((state) => state.auth);
  useEffect(()=>{
    axios.get(`${base_url}/getuserbyuid/${loggedin.user.uid}`).then((response)=>{
      console.log(response)
      setloading(true);
    }).catch((error)=>{console.log(error)});
  })
  return (
    <section id="home" className="flex flex-row py-12">
      {!loading?(<><Homeleft /><Homeright /></>):<div className="loader"><ClimbingBoxLoader color="#36d7b7"
        
        loading={loading}
        
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>}
      
    </section>
  );
};

export default Home;
