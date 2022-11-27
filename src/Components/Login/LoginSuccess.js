import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import base_url from "../../api/api";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../store/authSlice";
const LoginSuccess = () => {
  const dispatch= useDispatch();

  const loggedin = useSelector((state) => state.auth);
  const [data,setdata]= useState({})
  useEffect(()=>{
    console.log(loggedin.user)
    var temp=new Object();
    temp["displayname"]=loggedin.user.displayName;
    temp["email"]=loggedin.user.email;
    temp["photoURL"]=loggedin.user.photoURL;
    temp["uid"]=loggedin.user.uid;

    setdata(temp)
    console.log(data)
  },[])


 
  return (
    <div className="w-96 px-6 py-4 ">
      <div className="flex flex-col">
        <span className="pt-5 font-poppins font-normal cursor-pointer text-[20px] text-white">
          You Have SuccessFully Signed In...
        </span>
        <button className="w-full bg-white mt-4 py-2 rounded-[20px] font-poppins font-normal cursor-pointer text-[18px]"> 
          <Link to="/">Click Here To Start Coding</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginSuccess;
