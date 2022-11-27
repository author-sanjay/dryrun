import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setUserLogout } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Homeleft = () => {
  // const loggedin = useSelector((state) => state.auth);
  // const dispatch=useDispatch();



  // console.log(loggedin.user)
  // const handlesignout=()=>{
  //   dispatch(setUserLogout());
    
  // }
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
            // src={loggedin.user.photoURL}
          />
        </div>
      </div>

      <span className="pt-5 font-poppins font-normal cursor-pointer text-[20px] text-white">
        Sanjay
        {/* {loggedin.user.displayname} */}
      </span>

      <span className="pt-1 font-poppins font-normal text-[15px] text-white">
        Coder
        {/* {loggedin.user.jopprofile==null?"Coder @":loggedin.user.jopprofile} */}
      </span>

      <a
        href=""
        className="font-poppins font-normal text-[18px] text-white mb-6"
      >
        Virtualz
        {/* {loggedin.user.company==null?"Dry Run":loggedin.user.company} */}
      </a>
      <a  className="py-1 px-5 mb-6 bg-none border-2 border-white self-center cursor-pointer rounded font-poppins font-normal text-[12px] text-white"><Link to="/edit-profile">Edit Profile</Link></a>
    
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
              
              <IconButton >
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
              <IconButton >
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
              <IconButton >
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
        
        <a className="py-3 px-20 mb-6 bg-gradient-to-r from-green-600 to-blue-500 hover:from-red-800 hover:to-red-500 self-center cursor-pointer rounded-lg font-poppins font-normal text-[16px] text-white" >Log Out</a>
      </div>
    </div>
  </section>
  )
}

export default Homeleft