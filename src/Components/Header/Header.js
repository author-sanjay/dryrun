import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
const Header = () => {
  const action=()=>{
    console.log("juh")
  }
  const loggedin=useSelector((state)=>state.auth);
  return (
    <nav className='w-full flex py-6 pl-10 justify-between items-center navbar'>
        <img src={logo} className="w-[150px] h-[45px]"/>
        <div className='flex flex-row items-center'>
        <ul className='list-none justify-end items-center flex'>
        <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="problems"><Link to="/">Home</Link> </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="problems"><Link to="/problems">Problems</Link> </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="contests">Contests</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="learn">Learn</li>
            {/* <Avatar src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"/> */}
        </ul>
        {loggedin.user==null?<div className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' onClick={action} >
        <button>Login/Signup</button>
        </div>:<div className='flex cursor-pointer' onClick={action} >
        <Avatar src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"/>
        </div>}
        
        </div>
        
    </nav>
  )
}

export default Header