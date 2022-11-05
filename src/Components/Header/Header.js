import React from 'react'
import logo from "./logo.png"
const Header = () => {
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} className="w-[150px] h-[45px]"/>
        <ul className='list-none justify-end items-center flex'>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="problems">Problems</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="contests">Contests</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' key="learn">Learn</li>
        </ul>
    </nav>
  )
}

export default Header