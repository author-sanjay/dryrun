import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser } from "../../store/authSlice";
import Header from "../Header/Header";
import { auth, provider } from "./firebase";
import LoginSuccess from "./LoginSuccess";
const Login = () => {
  const dispatch = useDispatch();
  const loggedin = useSelector((state) => state.auth);

  const handlesignin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(setActiveUser(result.user));
    });
  };

  const handlesignout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(auth.setUserLogout());
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="w-full py-12 px-16 flex  flex-col h-full justify-self-center">
      <div className="flex flex-col justify-self-center  w-full  item-center justify-center">
        <span className="pt-10 font-poppins font-normal cursor-pointer text-[60px] text-white">
          Login
        </span>
        
        <hr className="mb-16" />
        <div className="flex flex-col items-center py-16 ">
          <div className="flex flex-col items-center justify-center w-[60%] ">
            <div className="flex flex-row">
              <img
                src="./logo.png"
                className="pt-2 w-[100px] h-[100px]"
                alt=""
              />
              <span className="pl-10 -pt-2 font-poppins font-normal cursor-pointer text-[80px] text-white">
                D
              </span>
              <span className=" pt-11 font-poppins font-normal cursor-pointer text-[40px] text-white">
                RY RUN
              </span>
            </div>
            <div className=" mt-10 w-full flex flex-col w-[80%] items-center">
              {loggedin.user==null?(<GoogleButton
                  type="dark" 
                  style={{width:"296px", marginBottom:"100px"}}
                  onClick={handlesignin}
                />):(<LoginSuccess/>)}
                
              
            </div>
          </div>
        </div>

        <div className="mt-40">
          <hr />
          <div className="flex flex-col items-center justify-center w-full ">
            <span className=" font-poppins font-normal cursor-pointer text-[15px] text-white">
              Copyright &copy; By DryRun. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
