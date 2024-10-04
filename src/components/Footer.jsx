import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg={"#3864B8"} w="full" h={{base: "full",md:"80"}}>
        <Flex alignItems={"center"} justifyContent={"center"} direction={"column"} pt={12}>
        <Text color={"white"} fontSize={"2xl"}>About Us</Text>
        <Text color={"white"} textAlign={"center"} width={{base: "300px",sm:"400px",md:'600px'}} lineHeight={6} fontWeight={"600"}>At Kokorko, we believe in empowering entrepreneurs and small businesses to reach new heights. Our platform is designed to make online selling easier, faster, and more secure. From seamless social media integration to secure payments with VerifiBuy, 
            Kokorko provides everything sellers need to grow their business and connect with more customers. 
            Whether you're just starting out or looking to scale, we're here to help you succeed—because when you thrive,
             we thrive.</Text>

        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}  mt="12" px={"5"} direction={["column","column","row"]}>
            <Text color={"white"}>© 2022 Kokorko - All rights reserved.</Text>
            <Flex gap={{base: 2, md: 4}} mb={"2"}>
                <Text color={"white"}>Terms & Conditions</Text>
                <Text color={"white"}>Cookies</Text>
                <Text color={"white"}>Privacy Policy</Text>
            </Flex>
        </Flex>
        
    </Box>
  )
}

export default Footer