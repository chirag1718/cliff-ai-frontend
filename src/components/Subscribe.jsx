import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Subscribe = () => {
  let navigate = useNavigate()
  const handleLogout = () => {
navigate("/login")
  };
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <p className="text-3xl text-blue-500">User Subscrpition</p>
      <p className="my-3">Login via Google account</p>
      <Button
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        className="bg-green-700"
      >
        Add account
      </Button>
      <Button
        variant="contained"
        className="my-4 bg-red-700  absolute bottom-0"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Subscribe;
