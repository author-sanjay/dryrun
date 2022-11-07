import React from "react";

const ProblemsList = () => {
  return (
    <section id="profile" className="flex ml-10 mt-8 px-12 w-full h-auto">
      <div className="flex flex-col w-full ">
        <div className="flex flex-row justify-between">
          <span className="font-poppins font-normal text-[30px] text-white">
            Problems
          </span>
          <form className="flex flex-row">
            <input
              type="text"
              placeholder="Search Topic"
              className="mr-4 px-4 border bg-primary rounded-[20px] py-2"
            ></input>
            <button
              type="submit"
              className="px-4 text-white border rounded-[20px]"
            >
              Search
            </button>
          </form>
        </div>

        <hr className="mt-4 opacity-50" />

        <div className="mt-4 w-full">
          <div className="flex flex-row">
            <div className="w-[30%] font-poppins font-normal text-[25px] text-white ">
              Question Id
            </div>
            <div className="w-[30%] font-poppins font-normal text-[25px] text-white ">
              Title
            </div>
            <div className="w-[30%] font-poppins font-normal text-[25px] text-white ">
              Avg Time Taken
            </div>
          </div>
        </div>
        <hr className="mt-4 opacity-50" />
        <div className="flex flex-col w-full mt-4 ">
          <div className="flex cursor-pointer flex-row px-2 mt-4 border py-2 rounded-[20px]">
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Question Id
            </div>
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Title
            </div>
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Avg Time Taken
            </div>
          </div>
          <div className="flex flex-row px-2 cursor-pointer mt-4 border py-2 rounded-[20px]">
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Question Id
            </div>
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Title
            </div>
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Avg Time Taken
            </div>
          </div>
          <div className="flex flex-row mt-4 px-2 border cursor-pointer py-2 rounded-[20px]">
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Question Id
            </div>
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Title
            </div>
            <div className="w-[30%] font-poppins font-normal text-[20px] text-white ">
              Avg Time Taken
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsList;
