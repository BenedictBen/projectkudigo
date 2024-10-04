import {
  Box,
  Flex,
  Image,
  Show,
  SimpleGrid,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";
import React from "react";
import vector from "../assets/vector.png";
import house from "../assets/house.png";
import shop from "../assets/Shopping cart.png";

const MainContent = () => {
  return (
    <Box px={8}>
      <Box>
        <Flex gap={4} direction={"column"} mb={4}>
          <Flex alignItems={"center"} gap={2}>
            <Image src={vector} alt="logo" w={10} />
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              textAlign={"left"}
            >
              VerifiBuy: Your Money, Protected Until You’re Happy
            </Text>
          </Flex>
          <Text>
            We understand that trust is key in online shopping, and Kokorko
            makes it easier than ever to shop with confidence. With VerifiBuy,
            your payments are protected through an Escrow system—but don’t
            worry, we’ve made it simple
          </Text>
          <SimpleGrid columns={[1, 1,2]} justifyItems="center" gap="3" mb="5"
            py={8}
          >
            <Card
              spacing={4}
              h={{base: "300px", md: "400px", lg: "300px"}}
             
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                What is Verifibuy?
              </Text>
              <Text color={"black"}>
                It’s a secure payment service that holds your money until you
                receive your order. Once you confirm that everything’s as
                expected, the payment is released to the seller. This ensures
                you never pay for something you haven’t received, giving both
                buyers and sellers peace of mind.
              </Text>
            </Card>

            <Card
              spacing={4}
              h={{base: "300px", md: "400px", lg: "300px"}}
             
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                How it works
              </Text>
              <Text>1. Place an order and make a payment.</Text>
              <Text>2. The money is held in Verifibuy Escrow.</Text>
              <Text>
                3. When your order is delivered and you're satisfied, the
                payment is released to the seller.
              </Text>
            </Card>
          </SimpleGrid>
        </Flex>
      </Box>
      <Box>
        <Flex gap={4} direction={"column"} mb={4}>
          <Flex alignItems={"center"} gap={2}>
            <Image src={house} alt="logo" w={10} />
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              textAlign={"left"}
            >
              For Sellers: Grow Your Business with Ease
            </Text>
          </Flex>
          <Text>
            Kokorko isn’t just a platform—it’s a powerful tool that helps you
            run and grow your business. Here’s what you can expect as a
            merchant:
          </Text>
          <SimpleGrid columns={[1, 1,3]} justifyItems="center" gap="3" mb="5">
            <Card
              spacing={4}
              h={{base: "280px", md: "400px", lg: "300px"}}
             
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Get Paid Safely with VerifiBuy
              </Text>
              <Text color={"black"}>
                No more worrying about getting paid! With VerifiBuy, payments
                are securely held until your buyer confirms delivery. Once the
                buyer is satisfied, you get paid instantly—giving you peace of
                mind and confidence in every transaction.
              </Text>
            </Card>

            <Card
              spacing={4}
              h={{base: "280px", md: "400px", lg: "300px"}}
             
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Expand Your Reach
              </Text>
              <Text color={"black"}>
                Connect your social media channels to Kokorko and turn your
                followers into customers. Our platform helps you reach new
                buyers by showcasing your products in a modern, user-friendly
                online store.
              </Text>
            </Card>
            <Card
              spacing={4}
              h={{base: "280px",  md: "400px", lg: "300px"}}
            
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize={{sm: "sm",lg:"lg"}} mb={4}>
                Manage Your Busniess Effortlessly
              </Text>
              <Text color={"black"}>
                From adding products to tracking orders and handling payments,
                Kokorko gives you all the tools you need to run your business
                smoothly. Our easy-to-use dashboard lets you stay on top of
                everything with minimal effort.
              </Text>
            </Card>
          </SimpleGrid>
        </Flex>
      </Box>
      <Box>
        <Flex gap={4} direction={"column"} mb={4}>
          <Flex alignItems={"center"} gap={2}>
            <Image src={shop} alt="logo" w={10} />
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              textAlign={"left"}
            >
              For Buyers: Shop Confidently, Every Time
            </Text>
          </Flex>
          <Text>
            Kokorko is designed to make your shopping experience easy, secure,
            and worry-free. Here’s how we’re looking out for you:
          </Text>
          <SimpleGrid
            columns={[1, 1,3]}
            justifyItems="center"
            gap="3"
            mb="5"
            py={8}
          >
            <Card
              spacing={4}
              h={{base: "250px", md: "400px", lg: "300px"}}
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Secure Transactions
              </Text>
              <Text color={"black"}>
                With VerifiBuy, you never have to worry about losing your money.
                Your payment is only released to the seller when you confirm
                that your order has been delivered and is exactly what you
                expected.
              </Text>
            </Card>

            <Card
              spacing={4}
              h={{base: "250px", md: "400px", lg: "300px"}}
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Discover New Sellers
              </Text>
              <Text color={"black"}>
                Browse through a variety of merchants offering unique products
                across different categories. Kokorko’s social integration lets
                you see more about a seller’s brand and their activity online.
              </Text>
            </Card>
            <Card
              spacing={4}
              h={{base: "250px", md: "400px", lg: "300px"}}
              bg="#F1F5FC"
              px={8}
              py={8}
              borderRadius="md"
            >
              <Text fontWeight="bold" fontSize="lg" mb={4}>
                Seamless Shopping Experience
              </Text>
              <Text color={"black"}>
                Our platform is designed with you in mind—whether you’re
                shopping on your phone, tablet, or computer, Kokorko makes it
                easy to explore products, make purchases, and track your orders.
              </Text>
            </Card>
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainContent;
