import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginSuccess = () => {
  const loggedin = useSelector((state) => state.auth);
  const addtodb=()=>{
    loggedin
  }
  return (
    <div className="w-96 px-6 py-4 ">
      <div className="flex flex-col">
        <span className="pt-5 font-poppins font-normal cursor-pointer text-[20px] text-white">
          You Have SuccessFully Signed In...
        </span>
        <button className="w-full bg-white mt-4 py-2 rounded-[20px] font-poppins font-normal cursor-pointer text-[18px]" onClick={addtodb}> 
          <Link to="/">Click Here To Start Coding</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginSuccess;
