import { Avatar, Grid } from "@material-ui/core";
import React from "react";

const Home = () => {
  return (
    <section id="home" className="flex flex-row py-12">
      <section
        id="profile"
        className="flex-0.3 flex ml-10 mt-8 justify-center w-100"
      >
        <div className="flex flex-col items-center py-[6px] px-4 bg-profile-gradient rounded-[10px] mb-2 w-96 h-auto">
          <span className="pt-10 font-poppins font-normal cursor-pointer text-[20px] text-white">
            My Profile
          </span>
          <div className="flex flex-column justify-self-auto">
            <div className="px-10 py-5 items-center">
              <Avatar
                className="avatar"
                style={{ height: "200px", width: "200px" }}
                sizes="xxl"
                src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"
              />
            </div>
          </div>
          <span className="pt-5 font-poppins font-normal cursor-pointer text-[20px] text-white">
            Lucifer
          </span>
          <span className="pt-1 font-poppins font-normal text-[13px] text-white">
            Software Developer @
          </span>
          <a
            href=""
            className="font-poppins font-normal text-[18px] text-white mb-10"
          >
            Virtualz
          </a>
          <div className="flex mb-2 justify-items-center">
            <span className="font-poppins font-normal text-[20px] text-white" >Socials</span>
          </div>
          <div className="mb-6">
          
            <table className="w-80 h-auto">
              <tr className="flex justify-between mb-2">
                <td className="font-poppins text-white font-normal text-[24px] ">
                  Global Rank
                </td>
                <td className="font-poppins text-white font-normal text-[24px] ">
                  Not Defined
                </td>
              </tr>
              <tr className="flex justify-between mb-2">
                <td className="font-poppins font-normal text-[16px] text-white">
                  Questions Solved
                </td>
                <td className="font-poppins font-normal text-[16px] text-white">
                  200
                </td>
              </tr>
              <tr className="flex justify-between mb-2">
                <td className="font-poppins font-normal text-[16px] text-white">
                  Accuracy Solved
                </td>
                <td className="font-poppins font-normal text-[16px] text-white">
                  78.2%
                </td>
              </tr>
              <tr className="flex justify-between mb-2">
                <td className="font-poppins font-normal text-[16px] text-white">
                  Joined
                </td>
                <td className="font-poppins font-normal text-[16px] text-white">
                  06 June 2022
                </td>
              </tr>
            </table>
          </div>
          <div className="flex mb-2 justify-items-start">
            <span className="font-poppins font-normal text-[23px] text-white" >Socials</span>
          </div>
          <div className="items-center">
            <table className="w-80 h-auto">
              <tr className="flex justify-between mb-2">
                <td className="font-poppins font-normal text-[16px] text-white">
                  Icon
                </td>
                <td className="font-poppins font-normal text-[16px] text-white">
                  <a href="">LinkedIn</a>
                </td>
              </tr>
              <tr className="flex justify-between mb-2">
                <td className="font-poppins font-normal text-[16px] text-white">
                  Icon
                </td>
                <td className="font-poppins font-normal text-[16px] text-white">
                <a href="">Github</a>
                </td>
              </tr>
              <tr className="flex justify-between mb-2">
                <td className="font-poppins font-normal text-[16px] text-white">
                  Icon
                </td>
                <td className="font-poppins font-normal text-[16px] text-white">
                <a href="">Instagram</a>
                </td>
              </tr>
            </table>
          
          </div>
        </div>
      </section>
      <section id="quesion" className="flex-1 flex justify-center items-start">
        hghj
      </section>
    </section>
  );
};

export default Home;
