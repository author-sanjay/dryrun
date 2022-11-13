import React from 'react'
import Home from './Home'
import { useSelector } from "react-redux";
import Homeerror from './Homeerror';
const Homewithauth = () => {
  const loggedin = useSelector((state) => state.auth);
  return loggedin.user==null?<Homeerror/>:<Home/>
}

export default Homewithauth