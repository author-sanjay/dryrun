import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const HomeLefterror = () => {
  return (
    <section
    id="profile"
    className="flex ml-10 mt-8 justify-center w-auto"
  >
    <div className="flex flex-col items-center py-[6px] px-4 bg-profile-gradient rounded-[10px] mb-2 w-96 h-auto">
      <span className="pt-10 font-poppins font-normal cursor-pointer text-[20px] text-white">
        My Profile
      </span>

      <span className="pt-10 font-poppins font-normal cursor-pointer text-[20px] text-white">
        Please
      </span>

      <a className='py-2 px-2 border rounded-[20px] mt-10 font-poppins bg-blue-gradient font-normal cursor-pointer text-[20px] text-black' ><Link to="/login">LOGIN IN / SIGN Up</Link> </a>

      <span className="pt-10 font-poppins font-normal cursor-pointer text-[20px] text-white">
        To View Your Profile
      </span>

      <span className="pt-10 mb-10 font-poppins font-normal cursor-pointer text-[20px] text-white">
        Thank You...
      </span>


    </div>
  </section>
  )
}

export default HomeLefterror