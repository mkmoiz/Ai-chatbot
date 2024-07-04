// import "./App.css";
import React,{useState} from "react"
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme,ThemeProvider} from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import {themeSettings} from "./theme."
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import {Toaster} from 'react-hot-toast
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";

const App = () => {
  const theme=useMemo(()=>createTheme(themeSettings()),[])
  return (
    
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Navbar/>
    <Toaster/>
    <Routes> 
      <Route path="/"  element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/summary"  element={<Summary/>}/>
      <Route path="/paragraph"  element={<Paragraph/>}/>


    </Routes>
    </ThemeProvider>
    </>
  )
}

export default App