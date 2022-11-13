import { Avatar, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setUserLogout } from "../../store/authSlice";
const Homeleft = () => {
  const dispatch=useDispatch();
  const handlesignout=()=>{
    dispatch(setUserLogout());
  }
  return (
    <section
    id="profile"
    className="flex ml-10 mt-8 justify-center w-auto"
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
        className="font-poppins font-normal text-[18px] text-white mb-6"
      >
        Virtualz
      </a>
    
      <div className="flex mb-2 justify-items-center">
      
        <span className="font-poppins font-normal text-[25px] text-white">
          Stats
        </span>
      </div>

      <div className="mb-2">
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
        <span className="font-poppins font-normal text-[23px] text-white">
          Socials
        </span>
      </div>

      <div className="items-center">
        
        <table className="w-80 h-auto">
          
          <tr className="flex justify-between mb-1">
            <td className="font-poppins font-normal text-[16px] text-white">
              <IconButton>
                <LinkedIn
                  style={{ width: "30px", height: "30px", color: "white" }}
                />
              </IconButton>
            </td>
            <td className="font-poppins font-normal text-[16px] text-white mt-3">
              <a href="">LinkedIn</a>
            </td>
          </tr>
          
          <tr className="flex justify-between mb-2">
            <td className="font-poppins font-normal text-[16px] text-white">
              <IconButton>
                <GitHub
                  style={{ width: "30px", height: "30px", color: "white" }}
                />
              </IconButton>
            </td>
            <td className="font-poppins font-normal text-[16px] text-white mt-3">
              <a href="">Github</a>
            </td>
          </tr>
          
          <tr className="flex justify-between mb-2">
            <td className="font-poppins font-normal text-[16px] text-white">
              <IconButton>
                <Instagram
                  style={{ width: "30px", height: "30px", color: "white" }}
                />
              </IconButton>
            </td>
            <td className="font-poppins font-normal text-[16px] text-white mt-3">
              <a href="">Instagram</a>
            </td>
          </tr>
        
        </table>
      </div>
      <div className="mt-5 flex flex-col">
        
        <a  className="py-3 px-8 mb-6 bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-900 hover:to-green-700 self-center cursor-pointer rounded-lg font-poppins font-normal text-[16px] text-white">See All Submissions</a>
        
        <a className="py-3 px-20 mb-6 bg-gradient-to-r from-green-600 to-blue-500 hover:from-red-800 hover:to-red-500 self-center cursor-pointer rounded-lg font-poppins font-normal text-[16px] text-white" onClick={handlesignout}>Log Out</a>
      </div>
    </div>
  </section>
  )
}

export default Homeleft