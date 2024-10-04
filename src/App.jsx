import { Box, Button, Flex, Image, Show } from "@chakra-ui/react";
import React from "react";
import logo from "./assets/logo.png"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    // Desktop View
    <div>
      <Home/>
      <SignUp/>
    </div>
  );
};

export default App;
