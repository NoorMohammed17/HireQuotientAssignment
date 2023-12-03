"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { PiHandWaving } from "react-icons/pi";

export default function Hero1() {
  return (
    <Box bg="#FDF2EC">
      <Container maxW={"6xl"} bg="#FDF2EC">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Flex
            border={"1px solid #E6DAFF"}
            bg="white"
            align={"center"}
            p="1"
            borderRadius={"8"}
          >
            <PiHandWaving />
            <Text as="b" ml="10px" color="purple.500">
              WELCOME TO MANAGE WISE!
            </Text>
            <Badge></Badge>
          </Flex>

          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "7xl" }}
            lineHeight={"110%"}
          >
            Empower your business with{" "}
            <Text as={"span"} color={"#FE8162"} marginRight="5px">
              Strategic
            </Text>
            insights
          </Heading>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
          >
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"purple"}
              bg={"#8247FF"}
              _hover={{ bg: "#8247FF" }}
            >
              Get started
            </Button>
            <Button rounded={"full"} px={6}>
              Watch Demo
            </Button>
          </Stack>
        </Stack>
        <Box>
          <Image
            src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048"
            alt="Dan Abramov"
          />
        </Box>
      </Container>
    </Box>
  );
}
