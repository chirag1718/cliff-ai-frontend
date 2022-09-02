import React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate()
  const handleClick = () => {
    navigate("/subscriptions")
  }
  const handleLogout = () => {
    navigate("/login")
      };
  return (
    <div className="flex flex-col justify-center items-center ">
      <p className="mt-2 text-2xl text-blue-500">Welcome to Greendeck Dashboard</p>
      <Button variant="contained" className="my-4 bg-green-700" onClick={handleClick} startIcon={<AddCircleOutlineIcon/>}>Add Google Account</Button>
      <Button variant="contained" className="my-4 bg-red-700  absolute bottom-0" onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
