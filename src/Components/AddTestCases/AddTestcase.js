import { Search } from "@material-ui/icons";
import React from "react";
import Myeditor from "../CodeEditor/Myeditor";

const AddTestcase = () => {
  return (
    <div
      className="text-white mt-5 flex flex-row"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-white mx-5 w-1/2">
        <div className="flex flex-col">
          <span className="mb-5 font-poppins font-normal cursor-pointer text-[25px] text-white">
            Add test Case
          </span>
          <span className=" font-poppins font-normal cursor-pointer text-[18px] text-white">
            Enter Question ID
          </span>
          <div className="flex mb-10 flex-row">
            <input
              type="number"
              className="border rounded-[30px] mt-2 w-full"
              style={{ minHeight: "3vh", background: "none" }}
            />

            <Search className="cursor-pointer" style={{ marginTop: "10px", marginLeft: "15px" }} />
          </div>

          <div className="flex flex-col">
            <span className="mb-2 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Problem
            </span>
            <p className="mb-5 font-poppins font-normal text-[15px] text-white">
              Problem Chef is buying sweet things to prepare for Halloween! The
              shop sells both chocolate and candy. Each bar of chocolate has a
              tastiness of XX. Each piece of candy has a tastiness of YY. One
              packet of chocolate contains 22 bars, while one packet of candy
              contains 55 pieces. Chef can only buy one packet of something
              sweet, and so has to make a decision: which one should he buy in
              order to maximize the total tastiness of his purchase?
            </p>

            <span className="mb-2 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Input Format
            </span>
            <p className="mb-5 font-poppins font-normal text-[15px] h-[50%] text-white">
              Problem Chef is buying sweet things to prepare for Halloween! The
              shop sells both chocolate and candy. Each bar of chocolate has a
              tastiness of XX.
            </p>

            <span className="mb-2 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Output Format
            </span>
            <p className="mb-5 font-poppins font-normal text-[15px] h-[50%] text-white">
              Problem Chef is buying sweet things to prepare for Halloween! The
              shop sells both chocolate and candy. Each bar of chocolate has a
              tastiness of XX.
            </p>

            <div className="flex flex-col mb-5">
              <span className="mb-2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                Test Case 1
              </span>
              <div
                className="flex flex-row w-full"
                style={{ backgroundColor: "#0a314a" }}
              >
                <div className="w-1/2 mx-5 mt-2 flex flex-col">
                  <span className="mb-2 font-poppins font-normal  text-[17px] text-white">
                    Sample Input
                  </span>
                  <p className="mb-5 font-poppins font-normal text-[12px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX.
                  </p>
                </div>
                <div className=" w-1/2 mx-5 mt-2 flex flex-col">
                  <span className="mb-2 font-poppins font-normal  text-[17px] text-white">
                    Expected Output
                  </span>
                  <p className="mb-5 font-poppins font-normal text-[12px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="mb-2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                Test Case 2
              </span>
              <div
                className="flex flex-row w-full"
                style={{ backgroundColor: "#0a314a" }}
              >
                <div className="w-1/2 mx-5 mt-2 flex flex-col">
                  <span className="mb-2 font-poppins font-normal  text-[17px] text-white">
                    Sample Input
                  </span>
                  <p className="mb-5 font-poppins font-normal text-[12px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX.
                  </p>
                </div>
                <div className=" w-1/2 mx-5 mt-2 flex flex-col">
                  <span className="mb-2 font-poppins font-normal  text-[17px] text-white">
                    Expected Output
                  </span>
                  <p className="mb-5 font-poppins font-normal text-[12px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX.
                  </p>
                </div>
              </div>
            </div>

            <span className="my-2 font-poppins font-normal cursor-pointer text-[20px] text-white">
              Explaination
            </span>
            <p className="mb-5 font-poppins font-normal text-[15px] h-[50%] text-white">
              Problem Chef is buying sweet things to prepare for Halloween! The
              shop sells both chocolate and candy. Each bar of chocolate has a
              tastiness of XX.
            </p>
          </div>
        </div>
      </div>

      {/* sIDE bAR */}

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
            onChange={null}
          >
            <option values="none">Select</option>
            <option values="js">Javascript</option>
            <option values="C++">C++</option>
            <option values="Python">Python</option>
          </select>
        </div>
        <Myeditor />

        <div className="flex flex-col mt-8">
          <div className=" w-full flex flex-col">
            <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[15px] text-white">
              Input
            </span>
            <input
              className="border w-full"
              style={{ minHeight: "10vh", background: "none" }}
              type={"text"}
            />
          </div>
          <div className="py-1 px-20 mt-2  self-center cursor-pointer border rounded-[10px]  rounded-lg font-poppins font-normal text-[16px] text-white">
          Get expected Output
        </div>

          <div className=" w-full flex flex-col">
            <span className="mt-2 mb-2 font-poppins font-normal cursor-pointer text-[15px] text-white">
              Processed Output
            </span>
            <p className="mb-5 font-poppins font-normal text-[12px] h-[50%] text-white">
              Problem Chef is buying sweet things to prepare for Halloween! The
              shop sells both chocolate and candy. Each bar of chocolate has a
              tastiness of XX.
            </p>
          </div>
        </div>
        <div className="py-1 px-20 mt-2  self-center cursor-pointer border rounded-[10px]  rounded-lg font-poppins font-normal text-[16px] text-white">
          Submit Test Case
        </div>
      </div>
    </div>
  );
};

export default AddTestcase;
