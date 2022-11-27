import React, { useState } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import Myeditor from "../CodeEditor/Myeditor";

const AddQuestions = () => {
  const [language, setlanguage] = useState();

  const handlechange = (e) => {
    setlanguage(e.target.value);
    // console.log(e.target.value);
  };
  console.log(language)

  return (
    <div
      className="text-white mt-5 flex flex-row"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-white mx-5 w-1/2">
        <div className="flex flex-col">
          <span className=" font-poppins font-normal cursor-pointer text-[25px] text-white">
            Add Question Here
          </span>
          <div className="flex flex-col">
            <span className="mt-8 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Problem Statement
            </span>
            <input
              className="border  w-full"
              style={{ minHeight: "30vh", background: "none" }}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <span className="mt-4 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Input Format
            </span>
            <input
              className="border  w-full"
              style={{ minHeight: "10vh", background: "none" }}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <span className="mt-4 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Output Format
            </span>
            <input
              className="border  w-full"
              style={{ minHeight: "10vh", background: "none" }}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <span className="mt-4 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Constraints
            </span>
            <input
              className="border  w-full"
              style={{ minHeight: "10vh", background: "none" }}
              type={"text"}
            />
          </div>
          <div className="flex flex-col">
            <span className="mt-4 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Example Test Case 1
            </span>
            <div className="flex flex-row">
              <div className=" w-1/2 flex flex-col">
                <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[15px] text-white">
                  Input
                </span>
                <input
                  className="border w-3/4"
                  style={{ minHeight: "10vh", background: "none" }}
                  type={"text"}
                />
              </div>

              <div className="w-1/2 flex flex-col">
                <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[15px] text-white">
                  Expected Output
                </span>
                <input
                  className="border w-3/4"
                  style={{ minHeight: "10vh", background: "none" }}
                  type={"text"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mt-4 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Example Test Case 2
            </span>
            <div className="flex flex-row">
              <div className=" w-1/2 flex flex-col">
                <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[15px] text-white">
                  Input
                </span>
                <input
                  className="border w-3/4"
                  style={{ minHeight: "10vh", background: "none" }}
                  type={"text"}
                />
              </div>

              <div className="w-1/2 flex flex-col">
                <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[15px] text-white">
                  Expected Output
                </span>
                <input
                  className="border w-3/4"
                  style={{ minHeight: "10vh", background: "none" }}
                  type={"text"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
























      <div className="text-white mx-5 w-1/2 flex flex-col">
        <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[25px] text-white">
          Add Your Editorial Code
        </span>
        <div className="h-12 py-5 items-center rounded-[10px] mb-2 border w-full flex flex-row">
          <span className="font-poppins font-normal text-[18px] h-[50%] text-white px-5 mb-6">
            Language:
          </span>
          <select
            className="bg-black font-poppins cursor-pointer border rounded-[10px] px-14 font-normal text-[18px]  text-white px-5 "
            onChange={handlechange}
          >
            <option values="none">Select</option>
            <option values="js">Javascript</option>
            <option values="C++">C++</option>
            <option values="Python">Python</option>
          </select>
        </div>
        <Myeditor />
        <div className="py-3 px-20 mt-4  self-center cursor-pointer border rounded-[10px]  rounded-lg font-poppins font-normal text-[16px] text-white">
          Submit Question
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
