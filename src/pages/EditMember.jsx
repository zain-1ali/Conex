import React from "react";
import Sidebar from "../components/Sidebar";
import { SlArrowLeft } from "react-icons/sl";
import prfl from "../imgs/prfl.jpeg";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { BsQrCode } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FormControlLabel, Switch } from "@mui/material";
import styled from "@emotion/styled";
import About from "../components/EditComponents/About";

const EditMember = () => {
  let navigate = useNavigate();

  return (
    <div className="w-[100%] flex bg-[#F8F8F8] h-[100vh]">
      <Sidebar />
      <div className="w-[80%] flex justify-center overflow-y-scroll">
        <div className="w-[95%] ">
          <div className="w-[100%] flex justify-between   mt-[30px]  items-center">
            <div className="w-[27%] h-[65px] flex justify-evenly items-center">
              <SlArrowLeft
                className="text-2xl cursor-pointer"
                onClick={() => navigate("/home")}
              />
              <div className="bg-[#B1AEAE] h-[20px] w-[2px]"></div>
              <img
                src={prfl}
                alt=""
                className="h-[65px] w-[65px] rounded-full object-cover"
              />
              <p className="font-[600] text-[16px]">Naruto Uzumaki</p>
            </div>

            <div
              className="w-[20%] h-[47px]  flex justify-center
            "
            >
              <div className="h-[47px] w-[149px] bg-[white] rounded-[36px] cursor-pointer flex items-center shadow-xl"></div>
            </div>
          </div>
          <div className="w-[100%] h-[590px] mt-5 flex flex-col items-center">
            <div className="w-[70%] h-[55px]  rounded-t-[35px] bg-white flex">
              <div className="w-[25%] h-[100%]  rounded-tl-[35px] border-r cursor-pointer hover:bg-black hover:text-white flex justify-center items-center">
                <FaUser className="text-[16px] ml-2 " />
                <p className="font-[600] text-[16px] ml-2">About</p>
              </div>

              <div className="w-[25%] h-[100%]   border-r cursor-pointer hover:bg-black flex items-center justify-center hover:text-white text-black">
                <IoMdMenu className="text-[16px] ml-2 " />
                <p className="font-[600] text-[16px] ml-2">Content</p>
              </div>
              <div className="w-[25%] h-[100%]   border-r cursor-pointer hover:bg-black flex items-center justify-center hover:text-white text-black">
                <BsQrCode className="text-[16px] ml-2 " />
                <p className="font-[600] text-[16px] ml-2">Qr Code</p>
              </div>
              <div className="w-[25%] h-[100%]  rounded-tr-[35px]  cursor-pointer hover:bg-black flex items-center justify-center hover:text-white text-black">
                <FaFilter className="text-[16px] ml-2 " />
                <p className="font-[600] text-[16px] ml-2">Leads</p>
              </div>
            </div>
            <div className="w-[100%] h-[535px]  rounded-[35px] shadow-xl bg-white flex">
              <div className="w-[70%] h-[100%] border-r flex justify-center items-center">
                <About />
              </div>
              <div className="w-[30%] h-[100%]"></div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default EditMember;
