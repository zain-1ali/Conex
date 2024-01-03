import React from "react";
import bg from "../imgs/bg.jpg";
// import prfl from "../imgs/nlogo.jpeg";
import primg from "../imgs/nlogo.jpg";
import { FaBriefcase } from "react-icons/fa6";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const MemberCard = ({ img, name }) => {
  let navigate = useNavigate();
  return (
    <div className="w-[265px] h-[290px]  rounded-3xl mt-[30px] bg-[white]">
      <div className="rounded-t-3xl h-[154px]  w-[100%] relative  ">
        <div className="h-[85px] w-[85px] absolute bottom-[0px] left-6">
          <div className="h-[85px] w-[85px] relative">
            <img
              src={primg}
              alt="prfl"
              className="h-[40px] w-[40px] rounded-full absolute bottom-[5px] right-[-20px] object-cover"
            />
            <img
              src={img}
              alt="prfl"
              className="h-[85px] w-[85px] rounded-full object-cover"
            />
          </div>
        </div>
        <img
          src={bg}
          alt="bg"
          className="h-[124px] w-[100%] object-cover rounded-t-3xl"
        />
      </div>

      <div className="w-[100%] flex justify-center   mt-3">
        <div className="w-[90%] flex justify-between">
          <div className="h-[114px] w-[48%]  rounded-[7px] bg-[#FBFBFB] flex justify-center items-center">
            <div className="h-[85%] w-[86%]">
              <h2 className="font-[500] text-[12px]">{name}</h2>
              <div className="flex mt-1">
                <FaBriefcase className="text-xs text-black" />
                <p className="font-[500] text-[9px] ml-[4px] text-[#3D3C3C]">
                  Project Manager
                </p>
              </div>
              <div className="flex mt-[5px]">
                <div className="w-[15%]">
                  <BsFillInfoSquareFill className="text-xs text-black" />
                </div>

                <p className="font-[500] text-[9px] ml-[4px] text-[#3D3C3C]">
                  Za Solnou Lorem ipsum doler merga senta thita , limbhtra
                  sdfnjsd
                </p>
              </div>
            </div>
          </div>
          <div className="h-[114px] w-[48%]  flex justify-center items-center">
            <div className="h-[100%] w-[90%] flex flex-col justify-between">
              <div className="w-[100%] flex justify-between">
                <div className="h-[53px] w-[46%] bg-[#FBFBFB] rounded-[6px] flex flex-col justify-center items-center">
                  <CiLock className="text-[#3D3C3C] text-[16px]" />
                  <p className="font-[500] text-[9px] text-[#3D3C3C]">Lock</p>
                </div>
                <div
                  className="h-[53px] w-[46%] bg-[#FBFBFB] rounded-[6px] flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => navigate("/edit")}
                >
                  <FiEdit className="text-[#3D3C3C] text-[14px]" />
                  <p className="font-[500] text-[9px] text-[#3D3C3C] mt-1">
                    Edit
                  </p>
                </div>
              </div>

              <div className="w-[100%] flex justify-between">
                <div className="h-[53px] w-[46%] bg-[#FBFBFB] rounded-[6px] flex flex-col justify-center items-center">
                  <FiShare2 className="text-[#3D3C3C] text-[16px]" />
                  <p className="font-[500] text-[9px] text-[#3D3C3C]">Share</p>
                </div>
                <div className="h-[53px] w-[46%] bg-[#FBFBFB] rounded-[6px] flex flex-col justify-center items-center">
                  <IoTrashOutline className="text-[#3D3C3C] text-[16px]" />
                  <p className="font-[500] text-[9px] text-[#3D3C3C]">Delete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
