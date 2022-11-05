import { Avatar } from '@material-ui/core'
import React from 'react'
import logo from "./logo.png"
const Header = () => {
  const action=()=>{
    console.log('Hellp')
  }
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} className="w-[150px] h-[45px]"/>
        <div className='flex flex-row items-center'>
        <ul className='list-none justify-end items-center flex'>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="problems">Problems</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="contests">Contests</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="learn">Learn</li>
            {/* <Avatar src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"/> */}
        </ul>
        <div className='flex cursor-pointer' onClick={action} >
        <Avatar src="https://flxt.tmsimg.com/assets/p18480237_b_v13_ac.jpg"/>
        </div>
        </div>
        
    </nav>
  )
}

export default Header