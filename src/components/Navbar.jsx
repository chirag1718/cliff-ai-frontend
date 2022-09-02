import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-slate-900 top-0 shadow-md py-5 px-5 md:px-10">
        <div className=" flex items-center h-5 justify-between">
          <p className="text-2xl text-white">Greendeck</p>
          {/* <Button variant="contained" size="small" onClick={handleClick}>
            Sign Up
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
