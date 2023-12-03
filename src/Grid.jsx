"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const Card = ({ heading, description, src }) => {
  return (
    <Box
      //   maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Image src={src} alt="Example" objectCover="fit" />
        <Box mt={2}>
          <Heading size="md" textAlign={"left"}>
            {heading}
          </Heading>
          <Text mt={1} fontSize={"md"} textAlign={"left"} color="grey">
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Grid1() {
  return (
    <Container maxW={"6xl"} mt={12} mb={12}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Card
          heading={"Flexible Scheduling"}
          src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
          description={"Stay productive with our flexible scheduling system"}
        />
        <Card
          heading={"Easy Communication"}
          src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
          description={"Collaborate seamlessly with your team in real-time"}
        />
        <Card
          heading={"Analytics"}
          src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
          description={
            "Gain valuable insights with our advanced analytics feature"
          }
        />
      </SimpleGrid>
    </Container>
  );
}
