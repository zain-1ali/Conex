import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import uk from "../imgs/uk.png";
import fr from "../imgs/fr.png";
import { MdArrowDropDown } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { ListItem, Menu, MenuItem } from "@mui/material";
import MemberCard from "../components/MemberCard";
import c1 from "../imgs/c1.png";
import c2 from "../imgs/c2.png";
import c3 from "../imgs/c3.png";
import prfl from "../imgs/prfl.jpeg";
const Home = () => {
  let [openMenu, setopenMenu] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-[100%] flex bg-[#F8F8F8] h-[100vh]">
      <Sidebar />
      <div className="w-[80%] flex justify-center overflow-y-scroll">
        <div className="w-[90%] ">
          <div className="w-[100%] flex justify-between h-[50px]  mt-[30px]">
            <div className="w-[15%] h-[100%] flex items-center">
              <p className="font-[600] text-[20px]">
                Members{" "}
                <span className="font-[500] text-[10px] text-[#9B9B9B]">
                  (120)
                </span>
              </p>
            </div>
            <div className="w-[80%] h-[100%] flex justify-between">
              <div className="w-[254px] h-[100%] flex items-center rounded-[36px] bg-white shadow-xl">
                <input
                  type="text"
                  className="h-[100%] w-[77%] outline-none rounded-[36px] pl-[10px] ml-2"
                  placeholder="Search"
                />
                <BiSearchAlt className="text-[22px] text-[#9B9B9B] ml-2" />
              </div>
              <div
                component="nav"
                // aria-label="Device settings"
                id="lang-button"
                aria-haspopup="listbox"
                aria-controls="lang-menu"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleClickListItem}
                className="w-[129px] h-[100%] rounded-[36px] bg-white shadow-xl flex justify-evenly items-center cursor-pointer"
              >
                <img src={uk} alt="" className="h-[30px] w-[30px]" />
                <p className="font-[500] text-[15px]">English</p>
                <MdArrowDropDown className="text-2xl" />
              </div>
              <Menu
                id="lang-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "lang-button",
                  role: "listbox",
                }}
              >
                <MenuItem
                  // key={index}
                  // disabled={index === 0}
                  // selected={index === selectedIndex}
                  // onClick={(event) => handleMenuItemClick(event, index)}
                  onClick={() => {
                    handleClose();
                  }}
                  sx={{ display: "flex" }}
                >
                  <img
                    src={uk}
                    alt=""
                    className="h-[27px] w-[27px] object-cover"
                  />
                  <p className="font-[500] ml-2 text-base">English</p>
                </MenuItem>
                <MenuItem
                  // key={index}
                  // disabled={index === 0}
                  // selected={index === selectedIndex}
                  // onClick={(event) => handleMenuItemClick(event, index)}
                  onClick={() => {
                    handleClose();
                  }}
                  sx={{ display: "flex" }}
                >
                  <img
                    src={fr}
                    alt=""
                    className="h-[27px] w-[27px] object-cover rounded-full"
                  />
                  <p className="font-[500] ml-2 text-base">French</p>
                </MenuItem>
              </Menu>
              <div className="w-[129px] h-[100%] rounded-[36px] bg-white shadow-xl flex justify-center items-center cursor-pointer">
                <p className="font-[500] text-[15px] ml-2">Members</p>
                <MdArrowDropDown className="text-2xl ml-1" />
              </div>
              <div className="w-[185px] h-[100%] rounded-[36px] bg-black shadow-xl flex justify-center items-center cursor-pointer">
                <p className="font-[400] text-[14px] text-white mr-1">
                  Add New Member
                </p>
                <FaSquarePlus className="text-[white] ml-1" />
              </div>
            </div>
          </div>

          <div className="w-[100%] flex justify-between flex-wrap mt-[40px]">
            <MemberCard img={prfl} name="Naruto" />
            <MemberCard img={c1} name="Hiruzen Sarutobi" />
            <MemberCard img={c2} name="Hinata Hyuga" />
            <MemberCard img={c3} name="Kakashi Hatake" />
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
