import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const loggedIn = JSON.parse(localStorage.getItem("authenticToken"));
  const theme = useTheme();
  const navigate=useNavigate();

  //functions 
  const handleLogout=async()=>{
    try{
   await axios.post("http://localhost:8080/api/v1/auth/logout")
   localStorage.removeItem("authenticToken")
   toast.success("logout successfull")
   navigate("/login")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        AI chat boy
      </Typography>

      {loggedIn ? (
        <>
        <NavLink to="/"  p={1}>
          Home
        </NavLink>
          <NavLink to="/login"  onClick={handleLogout} p={1}>
          logout
        </NavLink>
        </>
      
      ) : (
        <>
          {" "}
          <NavLink to="/register" p={1}>
            Register
          </NavLink>
          <NavLink to="/login" p={1}>
            Login
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;
