"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  VStack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { RxStarFilled } from "react-icons/rx";

import { ReactElement } from "react";

export default function Column1() {
  return (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} bg="#EDEDFA" borderRadius={"3%"} p="30px">
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            borderRadius="40%"
            bg={"white"}
            mt={7}
            mb={1}
          >
            <Icon as={RxStarFilled} w={8} h={8} color="purple.500" />
          </Flex>
          <Heading textAlign={"left"}>
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </Heading>
        </Stack>
        <Box
          w={"full"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
        >
          <Box h={"80%"}>
            <Image
              src={
                "https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
              }
              alt="ExampleImage"
              objectFit={"cover"}
            />
          </Box>
          <Stack>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              textAlign="left"
            >
              Smart Task Management
            </Heading>
            <Text color={"gray.500"} textAlign="left">
              Say goodbye to chaos with our smart task management system.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
