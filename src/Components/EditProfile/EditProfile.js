import React, { useState } from "react";

const EditProfile = () => {
  const [data, setdata] = useState({});
  const handleclick=()=>{
    console.log(data);
  }
  return (
    <div className="w-full py-12 px-16 flex  flex-col h-full justify-self-center">
      <div className="flex flex-col justify-self-center  w-full  item-center justify-center">
        <span className="pt-10 font-poppins font-normal cursor-pointer text-[60px] text-white">
          Edit Your Profile
        </span>

        <hr className="mb-16" />
        <div className=" flex  flex-col py-5 w-full">
          <div className="flex flex-col">
            <div className="flex flex-row mb-10">
              <div className="flex px-5 flex-row w-1/2">
                <span className="w-1/2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                  Name
                </span>
                <input
                  className="w-1/2 h-[40px] mx-5 px-5 bg-white"
                  name="name"
                  value="Sanjay Kumar"
                  disabled
                />
              </div>
              <div className="flex px-5 flex-row w-1/2">
                <span className="w-1/2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                  Email
                </span>
                <input
                  type="email"
                  className="w-1/2 mx-5 h-[40px] px-5 bg-white"
                  name="name"
                  value="sanjaykumar73189@gmail.com"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-row mb-10">
              <div className="flex px-5 flex-row w-1/2">
                <span className="w-1/2  font-poppins font-normal cursor-pointer text-[20px] text-white">
                  Address
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      address: e.target.value,
                    });
                  }}
                  className="mx-5 w-1/2 px-5 h-[40px] bg-white"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div className="flex px-5 flex-row w-1/2">
                <span className="w-1/2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                  Phone Number
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      phonenumber: e.target.value,
                    });
                  }}
                  className="h-[40px] mx-5 px-5 w-1/2 bg-white"
                  name="phonenumber"
                  placeholder="Phone Number With Country Code"
                />
              </div>
            </div>
            <div className="flex flex-row mb-10">
              <div className="flex px-5  flex-row w-1/2">
                <span className="w-1/2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                  Country
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      country: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 h-[40px] w-1/2 bg-white"
                  name="country"
                  placeholder="Country"
                />
              </div>
              <div className="flex px-5 flex-row w-1/2">
                <span className=" font-poppins w-1/2 font-normal cursor-pointer text-[20px] text-white">
                  Job Role
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      jobRole: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 bg-white h-[40px] w-1/2"
                  name="Job Role"
                  placeholder="Student"
                />
              </div>
            </div>
            <div className="flex flex-row mb-10">
              <div className="flex px-5 flex-row w-1/2">
                <span className=" font-poppins w-1/2 font-normal cursor-pointer text-[20px] text-white">
                  Highest Education
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      highestdegree: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 bg-white w-1/2 h-[40px]"
                  name="Company"
                  placeholder="Company"
                />
              </div>
              <div className="flex px-5 flex-row w-1/2">
                <span className=" font-poppins w-1/2 font-normal cursor-pointer text-[20px] text-white">
                  College Name
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      collegename: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 w-1/2 bg-white h-[40px]"
                  name="github"
                  placeholder="https://github.com/"
                />
              </div>
            </div>
            <div className="flex flex-row mb-10">
              <div className="flex px-5 flex-row w-1/2">
                <span className=" font-poppins w-1/2 font-normal cursor-pointer text-[20px] text-white">
                  Company
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      company: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 bg-white w-1/2 h-[40px]"
                  name="Company"
                  placeholder="Company"
                />
              </div>
              <div className="flex px-5 flex-row w-1/2">
                <span className=" font-poppins w-1/2 font-normal cursor-pointer text-[20px] text-white">
                  Github
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      github: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 w-1/2 bg-white h-[40px]"
                  name="github"
                  placeholder="https://github.com/"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex px-5 flex-row w-1/2">
                <span className="w-1/2 font-poppins font-normal cursor-pointer text-[20px] text-white">
                  LinkedIn
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      linkedin: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 w-1/2 bg-white h-[40px]"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div className="flex px-5 flex-row w-1/2">
                <span className=" font-poppins w-1/2 font-normal cursor-pointer text-[20px] text-white">
                  Instagram
                </span>
                <input
                  onChange={(e) => {
                    setdata({
                      ...data,
                      instagram: e.target.value,
                    });
                  }}
                  className="mx-5 px-5 bg-white w-1/2 h-[40px]"
                  name="instagram"
                  placeholder="Instagram"
                />
              </div>
            </div>
          </div>

          <button onClick={handleclick} className="w-full mt-10 h-[40px] border rounded-[20px] w-80 self-center font-poppins font-normal cursor-pointer text-[20px] text-white">
            Update Profile
          </button>
        </div>

        <div className="mt-40">
          <hr />
          <div className="flex flex-col items-center justify-center w-full ">
            <span className=" font-poppins font-normal cursor-pointer text-[15px] text-white">
              Copyright &copy; By DryRun. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
