import React from "react";
import Sidebar from "../components/Sidebar";
import { FaSquarePlus } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import team1 from "../imgs/team1.png";
import { HiDotsVertical } from "react-icons/hi";

const SubTeams = () => {
  return (
    <div className="w-[100%] flex bg-[#F8F8F8] h-[100vh]">
      <Sidebar />
      <div className="w-[80%] flex justify-center overflow-y-scroll">
        <div className="w-[90%] ">
          <div className="w-[100%] flex justify-between h-[50px]  mt-[30px]">
            <div className="w-[15%] h-[100%] flex items-center">
              <p className="font-[600] text-[20px]">
                Sub Teams{" "}
                <span className="font-[500] text-[10px] text-[#9B9B9B]">
                  (3)
                </span>
              </p>
            </div>
            <div className="w-[75%] h-[100%] flex justify-between">
              <div className="w-[65%] h-[100%] flex items-center rounded-[36px] bg-white shadow-xl">
                <input
                  type="text"
                  className="h-[100%] w-[88%] outline-none rounded-[36px] pl-[10px] ml-2"
                  placeholder="Search"
                />
                <BiSearchAlt className="text-[22px] text-[#9B9B9B] ml-2" />
              </div>

              <div className="w-[185px] h-[100%] rounded-[36px] bg-black shadow-xl flex justify-center items-center cursor-pointer">
                <p className="font-[400] text-[14px] text-white mr-1">
                  Add Sub Team
                </p>
                <FaSquarePlus className="text-[white] ml-1" />
              </div>
            </div>
          </div>

          <div className="w-[100%] mt-[50px]">
            <div className="w-[100%] h-[153px] shadow-xl rounded-[50px] bg-white flex justify-between">
              <div className="w-[55%] h-[100%]  rounded-[50px] flex justify-between items-center ">
                <div className="w-[47%] h-[92%] rounded-[45px]  ml-[7px]">
                  <img
                    src={team1}
                    alt="team"
                    className="h-[100%] w-[100%] object-cover rounded-[45px]"
                  />
                </div>
                <div className="h-[100%] w-[46%] flex  items-center ">
                  <div>
                    <h2 className="text-[24px] font-[400]">Marketing Team</h2>
                    <div className="flex items-center text-[#7F7F7F]">
                      <GoPerson className="text-xl" />
                      <p className="ml-1 text-[16px] font-[400]">22 Members</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[100%] w-[23%] flex justify-around  items-center">
                <div className="h-[43px] w-[115px] bg-[#F3F3F3] rounded-[21px] cursor-pointer flex justify-center items-center">
                  <p>Add</p>
                  <div className="h-[12px] w-[12px] bg-white flex justify-center items-center ml-[4px]">
                    +
                  </div>
                </div>
                <HiDotsVertical className="text-[#BDBBBB] text-4xl cursor-pointer" />
              </div>
            </div>

            <div className="w-[100%] h-[153px] shadow-xl rounded-[50px] bg-white flex justify-between mt-5">
              <div className="w-[55%] h-[100%]  rounded-[50px] flex justify-between items-center ">
                <div className="w-[47%] h-[92%] rounded-[45px]  ml-[7px]">
                  <img
                    src={team1}
                    alt="team"
                    className="h-[100%] w-[100%] object-cover rounded-[45px]"
                  />
                </div>
                <div className="h-[100%] w-[46%] flex  items-center ">
                  <div>
                    <h2 className="text-[24px] font-[400]">Marketing Team</h2>
                    <div className="flex items-center text-[#7F7F7F]">
                      <GoPerson className="text-xl" />
                      <p className="ml-1 text-[16px] font-[400]">22 Members</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[100%] w-[23%] flex justify-around  items-center">
                <div className="h-[43px] w-[115px] bg-[#F3F3F3] rounded-[21px] cursor-pointer flex justify-center items-center">
                  <p>Add</p>
                  <div className="h-[12px] w-[12px] bg-white flex justify-center items-center ml-[4px]">
                    +
                  </div>
                </div>
                <HiDotsVertical className="text-[#BDBBBB] text-4xl cursor-pointer" />
              </div>
            </div>

            <div className="w-[100%] h-[153px] shadow-xl rounded-[50px] bg-white flex justify-between mt-5">
              <div className="w-[55%] h-[100%]  rounded-[50px] flex justify-between items-center ">
                <div className="w-[47%] h-[92%] rounded-[45px]  ml-[7px]">
                  <img
                    src={team1}
                    alt="team"
                    className="h-[100%] w-[100%] object-cover rounded-[45px]"
                  />
                </div>
                <div className="h-[100%] w-[46%] flex  items-center ">
                  <div>
                    <h2 className="text-[24px] font-[400]">Marketing Team</h2>
                    <div className="flex items-center text-[#7F7F7F]">
                      <GoPerson className="text-xl" />
                      <p className="ml-1 text-[16px] font-[400]">22 Members</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[100%] w-[23%] flex justify-around  items-center">
                <div className="h-[43px] w-[115px] bg-[#F3F3F3] rounded-[21px] cursor-pointer flex justify-center items-center">
                  <p>Add</p>
                  <div className="h-[12px] w-[12px] bg-white flex justify-center items-center ml-[4px]">
                    +
                  </div>
                </div>
                <HiDotsVertical className="text-[#BDBBBB] text-4xl cursor-pointer" />
              </div>
            </div>

            <div className="w-[100%] h-[153px] shadow-xl rounded-[50px] bg-white flex justify-between mt-5">
              <div className="w-[55%] h-[100%]  rounded-[50px] flex justify-between items-center ">
                <div className="w-[47%] h-[92%] rounded-[45px]  ml-[7px]">
                  <img
                    src={team1}
                    alt="team"
                    className="h-[100%] w-[100%] object-cover rounded-[45px]"
                  />
                </div>
                <div className="h-[100%] w-[46%] flex  items-center ">
                  <div>
                    <h2 className="text-[24px] font-[400]">Marketing Team</h2>
                    <div className="flex items-center text-[#7F7F7F]">
                      <GoPerson className="text-xl" />
                      <p className="ml-1 text-[16px] font-[400]">22 Members</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[100%] w-[23%] flex justify-around  items-center">
                <div className="h-[43px] w-[115px] bg-[#F3F3F3] rounded-[21px] cursor-pointer flex justify-center items-center">
                  <p>Add</p>
                  <div className="h-[12px] w-[12px] bg-white flex justify-center items-center ml-[4px]">
                    +
                  </div>
                </div>
                <HiDotsVertical className="text-[#BDBBBB] text-4xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default SubTeams;
