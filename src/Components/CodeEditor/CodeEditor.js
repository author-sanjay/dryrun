import React from "react";
import Split from "react-split";
import "./codeeditor.css";
import Myeditor from "./Myeditor";
const CodeEditor = () => {
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
              <div className="h-10 items-center rounded-[10px] mb-2 border w-full flex flex-row">
                <span className="font-poppins font-normal text-[15px] h-[50%] text-white px-5">Language:</span>
                <select id="language" className="">
                    <option value="JavaScript">JavaScript</option>
                </select>
              </div>
              <Myeditor />
              <div className="h-auto w-full">hhhjh</div>
            </div>
          </Split>
        </section>
      </div>
    </div>
  );
};

export default CodeEditor;
