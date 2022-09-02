import React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CliffAPI from "../apis/CliffAPI";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const handleClick = () => {
    navigate("/signup")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CliffAPI.post("/login", {
        username: userName,
        password,
      });
      navigate("/dashboard");
      console.log(response);
    } catch (error) {}
  };

  return (
    <div className=" flex">
      <div className="flex flex-1 flex-col w-full items-center justify-center h-screen">
        <p className="text-3xl font-semibold mb-3 text-blue-500">Welcome!</p>
        <FormControl variant="standard">
          <TextField
            htmlFor="name"
            label="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            size="small"
            className="mb-4"
          />
          <TextField
            htmlFor="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            className="mb-4"
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="w-56 mb-4"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </FormControl>
        <p className="text-xs">New here?</p>
        <p className="text-blue-500 hover:underline cursor-pointer mb-3 " onClick={handleClick}>
          Create account
        </p>
      </div>
    </div>
  );
};

export default Login;
