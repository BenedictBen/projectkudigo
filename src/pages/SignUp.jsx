import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  FormControl,
  FormLabel,
  Hide,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <Box>
      <Navbar />
      <Flex alignItems={"center"} justifyContent={"center"} mt="12">
        <Card w="container"
        variant={"unstyled"}>
          <CardBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={{base:"column", md: "column", lg: "row"}}
            gap="12"
          >
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Flex direction={"column"} gap={2}>
                <Text
                  fontSize={{ base: "xl", md: "4xl", lg: "3xl" }}
                  fontWeight={"bold"}
                  w={{lg: "280px"}}
                  textAlign={{base: "center", md: "center", lg: "left"}}
                >
                  Sign Up, Stay Updated{" "} 
                </Text>
                <Text w={{sm:"350px",lg:"430px"}} textAlign={{base: "center",sm: "center",lg: "left"}}>
                  We’ll notify you when Kokorko is live! Whether you’re ready to
                  grow your business or discover amazing products, be the first
                  to start your journey with us.
                </Text>
              </Flex>
              <Hide below="lg">
              <Flex flexBasis={28}></Flex>
              </Hide>
            </Flex>
            <Flex
              borderLeft={"3px faded grey"}
              borderRadius={"lg"}
              p={5}
              bg="#FAFAFA"
            >
              <Box as="form" display={"flex"} flexDirection={"column"} gap={6} alignItems={"center"} justifyContent="centert" mx="4">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="name"
                    id="name"
                    name="name"
                    // borderColor={"grey"}
                    bg={"white"}
                    borderRadius={"none"}
                    placeholder="Enter your name"
                    size="lg"
                    // w={["350px", "320px", "96"]}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    // borderColor={"grey"}
                    bg={"white"}
                    borderRadius={"none"}
                    placeholder="Enter your email"
                    size="lg"
                    // w={["380px", "320px", "96"]}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup display={"flex"} alignItems={"center"}>
                    <InputLeftAddon size="lg" bg={"white"} w={["20"]}>
                      {" "}
                      +233
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      size="lg"
                    //   w={["300px", "320px", "310px"]}
                      bg={"white"}
                    />
                  </InputGroup>
                </FormControl>

                <Button
                  bg={"#2752A5"}
                  color={"white"}
                  _hover={"#2752A5"}
                  size={["md"]}
                  px="32"
                >
                  Get Notified
                </Button>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default SignUp;
