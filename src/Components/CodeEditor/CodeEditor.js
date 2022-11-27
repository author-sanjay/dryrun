import React, { useState } from "react";
import Split from "react-split";
import "./codeeditor.css";
import Myeditor from "./Myeditor";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const CodeEditor = () => {
  const [language, setlanguage] = useState();
  const handlechange = (e) => {
    setlanguage(e.target.value);
    // console.log(e.target.value);
  };
  console.log(language)

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1480px] w-full">
        <section id="home" className="flex flex-row py-12 w-full h-full">
          <Split className="split w-full">
            <div className="flex flex-row items-center w-full h-full">
              <div className="flex flex-col border rounded-[10px]  w-full  text-white mr-4">
                <div className="ml-4 py-4">
                  <span className="text-gradient font-poppins font-normal text-[25px] text-white">
                    Question Number: Title
                  </span>
                </div>
                <div className="ml-4 py-4">
                  <span className=" font-poppins font-normal text-[25px] h-[50%] text-white">
                    Descriptions:
                  </span>
                </div>
                <div className="ml-4 py-4">
                  <p className=" font-poppins font-normal text-[15px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX. Each piece of candy has
                    a tastiness of YY. One packet of chocolate contains 22 bars,
                    while one packet of candy contains 55 pieces. Chef can only
                    buy one packet of something sweet, and so has to make a
                    decision: which one should he buy in order to maximize the
                    total tastiness of his purchase? Print Chocolate if the
                    packet of chocolate is tastier, Candy if the packet of candy
                    is tastier, and Either if they have the same tastiness.
                    Input Format The first line of input will contain a single
                    integer TT, denoting the number of test cases. Each test
                    case consists of one line of input, containing two
                    space-separated integers XX and YY — the tastiness of one
                    bar of chocolate and one piece of candy, respectively.
                    Output Format For each test case, output on a new line the
                    answer: Chocolate if the packet of chocolate is tastier.
                    Candy if the packet of candy is tastier. Either if they have
                    the same tastiness. You may print each character of the
                    output in either uppercase or lowercase, i.e, Candy, CANDY,
                    CaNdY and cANDy will all be treated as equivalent.
                  </p>
                </div>
                <div className="ml-4 py-4">
                  <span className=" font-poppins font-normal text-[25px] h-[50%] text-white">
                    Constraints:
                  </span>
                </div>
                <div className="ml-4 py-4">
                  <p className=" font-poppins font-normal text-[15px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX. Each piece of candy has
                    a tastiness of YY. One packet of chocolate contains 22 bars,
                    while one packet of candy contains 55 pieces. Chef can only
                    buy one packet of something sweet, and so has to make a
                    decision: which one should he buy in order to maximize the
                    total tastiness of his purchase?
                  </p>
                </div>
                <div className="ml-4 py-4">
                  <span className=" font-poppins font-normal text-[25px] h-[50%] text-white">
                    Explaination:
                  </span>
                </div>
                <div className="ml-4 py-4">
                  <p className=" font-poppins font-normal text-[15px] h-[50%] text-white">
                    Problem Chef is buying sweet things to prepare for
                    Halloween! The shop sells both chocolate and candy. Each bar
                    of chocolate has a tastiness of XX. Each piece of candy has
                    a tastiness of YY. One packet of chocolate contains 22 bars,
                    while one packet of candy contains 55 pieces. Chef can only
                    buy one packet of something sweet, and so has to make a
                    decision: which one should he buy in order to maximize the
                    total tastiness of his purchase?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-4  w-full text-white">
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
              <div className="h-auto flex flex-col w-full mt-5">
                <div className="flex flex-row justify-between">
                  <a className="py-3 px-8 mb-4  border rounded-[10px] self-center cursor-pointer rounded-lg font-poppins font-normal text-[16px] text-white">
                    Run Test Case
                  </a>

                  <a className="py-3 px-20 mb-4  self-center cursor-pointer border rounded-[10px]  rounded-lg font-poppins font-normal text-[16px] text-white">
                    Submit Answer
                  </a>
                </div>

                <div className="flex flex-col justify-between w-full h-auto border">
                  <div className="ml-4 mb-4">
                  <span className=" font-poppins font-normal text-[25px]  h-[50%] text-white ">
                    Congratulations... Your Code Worked...
                  </span>
                  </div>
                  <a className="py-2 px-20 mb-4  self-center cursor-pointer border rounded-[10px]  rounded-lg font-poppins font-normal text-[16px] text-white">
                    Attempt Next Question
                  </a>
                </div>

              </div>
            </div>
          </Split>
        </section>
      </div>
    </div>
  );
};

export default CodeEditor;
