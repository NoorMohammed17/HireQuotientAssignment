"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";

import { TbRectangleVertical } from "react-icons/tb";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { HiFire } from "react-icons/hi";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      w={"full"}
      borderRadius="20px"
      overflow="hidden"
      p={"60px 20px"}
      bg="rgb(33,33,33)"
    >
      <Stack spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          margin="auto"
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("purple.500", "purple.500")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color="white">
            {heading}
          </Heading>
          <Text mt={1} fontSize={"md"} color="grey">
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Grid2() {
  return (
    <Box p={4} bg="black">
      <Stack
        as={Container}
        maxW={"6xl"}
        textAlign={"left"}
        align={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Flex
          width="140px"
          border={"1px solid purple"}
          bg="white"
          align={"center"}
          p="1"
          borderRadius={"8"}
        >
          <TbRectangleVertical />
          <Text as="b" ml="5px" color="purple.500">
            AND MORE...
          </Text>
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color="white"
        >
          Explore an array of features that elevate your{" "}
          <Text as={"span"} color={"#FE8162"} marginRight="5px">
            Productivity{" "}
          </Text>
          to new heights
        </Heading>
        <Text
          color={"gray.500"}
          maxW={"3xl"}
          fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
        >
          Discover the tools that will revolutionize the way you manage and
          optimize your operations.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Card
            heading={"Cross-Platform Compatibility"}
            icon={<Icon as={BsFillPhoneFill} w={10} h={10} />}
            description={
              "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
            }
          />
          <Card
            heading={"Stay Informed with Essential Notifications"}
            icon={<Icon as={BsFillBellFill} w={10} h={10} />}
            description={
              "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
            }
          />
          <Card
            heading={"Secure Data Encryption at all times"}
            icon={<Icon as={HiFire} w={10} h={10} />}
            description={
              "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
            }
          />
        </SimpleGrid>
      </Container>

      <Stack
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Flex
          width="140px"
          border={"1px solid purple"}
          bg="white"
          align={"center"}
          p="1"
          borderRadius={"8"}
        >
          <TbRectangleVertical />
          <Text as="b" ml="5px" color="purple.500">
            INTEGRATIONS
          </Text>
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color="white"
        >
          Enable{" "}
          <Text as={"span"} color={"#FE8162"} marginRight="5px">
            integration{" "}
          </Text>
          with other popular tools and platforms
        </Heading>
        <Text
          color={"gray.500"}
          maxW={"3xl"}
          fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
        >
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </Text>
      </Stack>
      <Flex alignContent={"center"} justifyContent={"center"}>
        <Center>
          <Image
            width="2xl"
            src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
            alt="image"
          />
        </Center>
      </Flex>
    </Box>
  );
}
