import React from "react";
import Sidebar from "../components/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { Menu } from "@mui/material";
import { FaSquarePlus } from "react-icons/fa6";
import csv from "../imgs/csv.png";
import zap from "../imgs/zap.png";
import { TfiDownload } from "react-icons/tfi";
import c1 from "../imgs/c1.png";
import c2 from "../imgs/c2.png";
import c3 from "../imgs/c3.png";
import c4 from "../imgs/c4.png";
import c5 from "../imgs/c5.png";
import prfl from "../imgs/prfl.jpeg";
import { FaRegTrashCan } from "react-icons/fa6";

const Leads = () => {
  return (
    <div className="w-[100%] flex bg-[#F8F8F8] h-[100vh]">
      <Sidebar />
      <div className="w-[80%] flex justify-center overflow-y-scroll">
        <div className="w-[90%] ">
          <div className="w-[100%] flex justify-between h-[50px]  mt-[30px]">
            <div className="w-[25%] h-[100%] flex items-center">
              <p className="font-[600] text-[20px]">
                Leads Generated{" "}
                <span className="font-[500] text-[10px] text-[#9B9B9B]">
                  (120)
                </span>
              </p>
            </div>
            <div className="w-[72%] h-[100%] flex justify-between">
              <div className="w-[254px] h-[100%] flex items-center rounded-[36px] bg-white shadow-xl">
                <input
                  type="text"
                  className="h-[100%] w-[77%] outline-none rounded-[36px] pl-[10px] ml-2"
                  placeholder="Search"
                />
                <BiSearchAlt className="text-[22px] text-[#9B9B9B] ml-2" />
              </div>
              <div className="w-[185px] h-[100%] rounded-[36px] bg-white shadow-xl flex justify-around items-center cursor-pointer">
                <img src={csv} alt="" className="h-[37px] w-[37px]" />
                <p className="font-[500] text-[15px]">Export CSV</p>
                <TfiDownload className="text-lg mr-2" />
              </div>

              <div className="w-[185px] h-[100%] rounded-[36px] bg-white shadow-xl flex justify-evenly items-center cursor-pointer">
                <img src={zap} alt="" className="h-[37px] w-[37px]" />
                <p className="font-[500] text-[15px]">Export Zapier</p>
                <TfiDownload className="text-lg mr-2" />
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[47px] rounded-[36px] bg-[#ECEBEA] mt-[50px] flex justify-around items-center">
            <div className="w-[15%] ml-5">
              <p className="font-[500] text-[16px]">Contact</p>
            </div>
            <div className="w-[15%] ">
              <p className="font-[500] text-[16px]">Email</p>
            </div>
            <div className="w-[15%] ">
              <p className="font-[500] text-[16px]">Contacted with</p>
            </div>
            <div className="w-[15%] ">
              <p className="font-[500] text-[16px]">Date</p>
            </div>
            <div className="w-[15%] flex">
              <p className="font-[500] text-[16px]">Actions</p>
            </div>
          </div>

          <div className="w-[100%] h-[83px] rounded-[37px] bg-[white] flex justify-around items-center shadow-xl mt-4 cursor-pointer">
            <div className="flex items-center w-[16%] ">
              <img
                src={c3}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Kakashi Hatake</p>
            </div>
            <div className="w-[15%] ml-2">
              <p className="font-[500] text-[12px]">Name@gmail.com</p>
            </div>
            <div className="flex items-center w-[16%] ">
              <img
                src={c4}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Gaara</p>
            </div>
            <div className="w-[15%]">
              <p className="font-[500] text-[12px]">January 25, 2023</p>
            </div>
            <div className="w-[15%] flex ">
              <FaRegTrashCan className="text-2xl ml-3" />
            </div>
          </div>

          <div className="w-[100%] h-[83px] rounded-[37px] bg-[white] flex justify-around items-center shadow-xl mt-4 cursor-pointer">
            <div className="flex items-center w-[16%] ">
              <img
                src={c2}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Hinata Hyuga</p>
            </div>
            <div className="w-[15%] ml-2">
              <p className="font-[500] text-[12px]">Name@gmail.com</p>
            </div>
            <div className="flex items-center w-[16%] ">
              <img
                src={c5}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Sakura Haruno</p>
            </div>
            <div className="w-[15%]">
              <p className="font-[500] text-[12px]">January 25, 2023</p>
            </div>
            <div className="w-[15%] flex ">
              <FaRegTrashCan className="text-2xl ml-3" />
            </div>
          </div>

          <div className="w-[100%] h-[83px] rounded-[37px] bg-[white] flex justify-around items-center shadow-xl mt-4 cursor-pointer">
            <div className="flex items-center w-[16%] ">
              <img
                src={c1}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">
                Hiruzen Sarutobi
              </p>
            </div>
            <div className="w-[15%] ml-2">
              <p className="font-[500] text-[12px]">Name@gmail.com</p>
            </div>
            <div className="flex items-center w-[16%] ">
              <img
                src={c3}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Kakashi Hatake</p>
            </div>
            <div className="w-[15%]">
              <p className="font-[500] text-[12px]">January 25, 2023</p>
            </div>
            <div className="w-[15%] flex ">
              <FaRegTrashCan className="text-2xl ml-3" />
            </div>
          </div>

          <div className="w-[100%] h-[83px] rounded-[37px] bg-[white] flex justify-around items-center shadow-xl mt-4 cursor-pointer">
            <div className="flex items-center w-[16%] ">
              <img
                src={prfl}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Naruto Uzumaki</p>
            </div>
            <div className="w-[15%] ml-2">
              <p className="font-[500] text-[12px]">Name@gmail.com</p>
            </div>
            <div className="flex items-center w-[16%] ">
              <img
                src={c5}
                alt=""
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <p className="text-[12px] font-[500] ml-[5px]">Sakura Haruno</p>
            </div>
            <div className="w-[15%]">
              <p className="font-[500] text-[12px]">January 25, 2023</p>
            </div>
            <div className="w-[15%] flex ">
              <FaRegTrashCan className="text-2xl ml-3" />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Leads;
