import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated); // Check auth status
    console.log('Fetching user...');
    
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://mern-hospital-management-system-xhlb.onrender.com/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        console.log('User data:', response.data);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsAuthenticated(false);
        setUser({});
      }
    };
  
    fetchUser();
  }, [isAuthenticated]);
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
