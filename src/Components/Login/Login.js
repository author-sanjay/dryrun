import React, { useEffect, useState } from "react";
import md5 from "md5";
import base_url from "../../api/api";
import axios from "axios";
import { data } from "autoprefixer";
const Login = () => {
  const [credentials, setcredentials] = useState({});
  const handlesubmit = (e) => {
    // console.log(credentials.email)
    checkuser(credentials);
    e.preventDefault();
  };

  const checkuser=(data)=>{
    axios.get(`${base_url}/auth`,{data}).then(
      (response)=>{
        console.log(response)
      },(error)=>{
        console.log(error)
      }
      );
    
  };

  const authrize = () => {
    axios.get(`${base_url}/auth`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
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
            <div className=" mt-10 w-full flex flex-col w-[80%] self-center">
              <form onSubmit={handlesubmit}>
                <input
                  type="text"
                  name="email"
                  placeholder="     Email"
                  className="w-full h-12 rounded-[20px] mt-4"
                  onChange={(e) => {
                    setcredentials({ ...credentials, email: e.target.value });
                  }}
                />
                <input
                  type="password"
                  name="paswword"
                  placeholder="     Password"
                  className="w-full mt-4 h-12 mt-4 rounded-[20px]"
                  onChange={(e) => {
                    setcredentials({
                      ...credentials,
                      password: e.target.value,
                    });
                  }}
                />
                <div className="py-8 w-full ">
                  <button
                    type="submit"
                    className="bg-white w-full h-12 rounded-[20px]"
                  >
                    Login
                  </button>

                  <div className="justify-items-end mt-2">
                    <a className="self-end font-poppins font-normal cursor-pointer text-[15px] text-white">
                      Don't have an Account? Register...
                    </a>
                  </div>
                </div>
              </form>
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
