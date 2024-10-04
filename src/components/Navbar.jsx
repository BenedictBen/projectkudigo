import { Box, Button, Flex, Image, Show, Hide } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
      
      <Box bg="white">
        <Flex alignItems={"center"} 
          justifyContent={"space-between"} >
          <Flex 
          alignItems={"center"} 
          justifyContent={"space-between"} 
          width={"full"}
          py={"3"}
          px={"4"}
          >
            <Image src={logo}/>
            <Flex gap={2}
            alignItems={"center"} 
            justifyContent={"space-between"}

            >
              <Button variant={"ghost"} _hover={"none"}>About Us</Button>
              <Hide below="md">
              <Button bg={"#2752A5"} color={"white"} _hover={"#2752A5"}>Get Notified</Button>
              </Hide>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    
  );
};

export default Navbar;
