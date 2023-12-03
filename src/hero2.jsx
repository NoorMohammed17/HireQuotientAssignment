"use client";

import { Flex, Container, Heading, Stack, Text, Badge } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";

export default function Hero2() {
  return (
    <Container maxW={"6xl"}>
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
          <AiFillFire color="yellow" />
          <Text as="b" ml="10px" color="purple.500">
            PREMIER FEATURES
          </Text>
          <Badge></Badge>
        </Flex>

        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          lineHeight={"110%"}
        >
          Discover our product's{" "}
          <Text as={"span"} color={"#FE8162"}>
            Capabilities
          </Text>
        </Heading>
        <Text
          color={"gray.500"}
          maxW={"3xl"}
          fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
        >
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </Text>
      </Stack>
    </Container>
  );
}
