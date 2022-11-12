import React from 'react'
import Home from './Home'
import { useSelector } from "react-redux";
import Homeerror from './Homeerror';
const Homewithauth = () => {
    const user=useSelector((state)=>state.user);
  return user==null?<Homeerror/>:<Home/>
}

export default Homewithauth