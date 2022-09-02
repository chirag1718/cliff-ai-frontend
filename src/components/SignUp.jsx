import React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CliffAPI from "../apis/CliffAPI";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CliffAPI.post("/signup", {
        username: name,
        email,
        password,
      });
      console.log(response.data.user)
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className=" flex">
      <div className="flex flex-1 flex-col w-full items-center justify-center h-screen">
        <p className="text-3xl font-semibold mb-2 text-blue-500">Hello! there</p>
        <p className="text-xs mb-3">Please enter your details</p>
        <FormControl variant="standard">
          <TextField
            htmlFor="name"
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
            className="mb-4"
          />
          <TextField
            htmlFor="email"
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Sign in
          </Button>
        </FormControl>
        <p className="text-xs">Already a member?</p>
        <p className="text-blue-500 hover:underline cursor-pointer mb-3 " onClick={handleClick}>
          Login
        </p>
      </div>
    </div>
  );
};

export default Signup;
