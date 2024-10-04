import {
  Box,
  Button,
  VStack,
  Image,
  Show,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import circular from "../assets/circular.png";
import pc from "../assets/pc.png";

const HeroSection = () => {
  return (
    <>
      
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          mt={"6"}
        >
          <Flex alignItems={"center"} gap={2}>
            <Image
              src={circular} 
              alt="logo" 
            />
            <Text fontSize={{base: "lg", md: "4xl", lg: "5xl"}} >Coming Soon</Text>
          </Flex>
          <VStack >
            <Text 
            fontSize={{base: "xl", md: "4xl", lg: "5xl"}} 
            fontWeight={"bold"} w={{base: 60, md: "full"}}
            textAlign={"center"}
            >
              Exciting New Shopping Experience
            </Text>
            <Text fontSize={"base"}
            textAlign={"center"}
            >
              Discover fashion , electronics, home essentials, and so much more.
              Stay tuned!
            </Text>
            <Button
              bg={"#2752A5"}
              color={"white"}
              _hover={"#2752A5"}
              size={"lg"}
              
              mt="3"
            >
              Get Notified
            </Button>
          </VStack>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image src={pc} alt="pc" w={{base: "100%", md: "90%"}}/>
        </Flex>
     
    </>
  );
};

export default HeroSection;
