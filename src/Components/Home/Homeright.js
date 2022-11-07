import { Avatar } from "@material-ui/core";
import React from "react";
import { Whatshot, TurnedIn, Bookmark, Code } from "@material-ui/icons";

const Homeright = () => {
  return (
    <section id="profile" className="flex ml-10 mt-8 px-12 w-full h-auto">
      <div className="flex  flex-col py-[6px] px-4 rounded-[10px] mb-2 w-full h-auto">
        <div className="flex flex-row ">
          <div className="h-auto w-[70%] mr-4 bg-profile-gradient py-6 mb-5 rounded-[15px]">
            <div className="mx-16 flex flex-row ">
              <span className="pt-2 font-poppins font-normal cursor-pointer text-[27px] text-white">
                Ready For Job? Apply Now...
              </span>
              <TurnedIn
                className="font-normal cursor-pointer text-white mt-2 ml-5"
                style={{ fontSize: "40px" }}
              />
            </div>
          </div>
          <div className="h-auto w-[30%] flex flex-row bg-profile-gradient py-4 mb-5 rounded-[15px]">
            <Whatshot
              className="ml-5"
              style={{
                color: "orangered",
                fontSize: "70px",
                alignSelf: "center",
              }}
            />
            <span className="pt-4 font-poppins font-normal cursor-pointer text-[27px] text-white">
              10 Days{" "}
            </span>
          </div>
        </div>

        <span className="pt-4 font-poppins font-normal cursor-pointer text-[45px] text-white">
          Start Practice Now...
        </span>

        <div className="flex flex-row justify-between items-center mt-2 ">
          {/* QUESTION CARD */}
          <div className="bg-blue-gradient w-full h-80 rounded-[20px] px-10 py-10">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row ">
                <h2 className="font-poppins font-normal text-[20px] text-black py-2">
                  Question Id :
                </h2>
                <h2 className="font-poppins font-normal text-[20px] text-black px-2 py-2">
                  216
                </h2>
              </div>
              <div className="flex flex-row">
                <h2 className="font-poppins font-normal text-[20px] text-black px-4 py-1">
                  Contributed By:{" "}
                </h2>
                <Avatar
                  className="cursor-pointer"
                  src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"
                />
                <a className="py-2 cursor-pointer px-2">Sanjay Kumar Goswami</a>
              </div>
            </div>

            {/* Question Title */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col py-4">
                <a className="font-poppins font-semibold cursor-pointer font-normal text-[40px] text-black py-5">
                  Longest Substring Without Repeating Characters
                </a>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row space-x-4">
                    <h3 className="mt-1">Tags:</h3>
                    <a className="px-4  cursor-pointer py-1 rounded-[10px] bg-white ">
                      Array
                    </a>
                    <a className="px-4  cursor-pointer py-1 rounded-[10px] bg-white ">
                      Array
                    </a>
                    <a className="px-4  cursor-pointer py-1 rounded-[10px] bg-white ">
                      Array
                    </a>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <h3 className="mt-1">Avg. Time Taken:</h3>
                    <h3 className="mt-1">20 min.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-12 ">
          <a className="ml-3 py-2 bg-gradient-to-r from-green-600 to-blue-500 hover:from-red-800 hover:to-red-500 cursor-pointer w-[45%] h-auto font-poppins font-normal text-[25px] rounded-[10px] text-center text-white">
            Save For Later{" "}
            <Bookmark style={{ color: "white", fontSize: "35px" }} />
          </a>
          <a className="ml-3 py-2  bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-900 hover:to-green-700 cursor-pointer w-[45%] h-auto font-poppins font-normal text-[25px] rounded-[10px]  text-center text-white">
            Attempt Question{" "}
            <Code style={{ color: "white", fontSize: "35px" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Homeright; 
