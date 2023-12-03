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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CloseIcon, AddIcon } from "@chakra-ui/icons";
import { RxStarFilled } from "react-icons/rx";
import { TbUserQuestion } from "react-icons/tb";

export default function Column2() {
  return (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} borderRadius={"3%"} p="30px">
          <Flex
            border={"1px solid #E6DAFF"}
            bg="white"
            align={"center"}
            p="1"
            borderRadius={"8"}
            width="80px"
          >
            <TbUserQuestion color="purple.500" />
            <Text as="b" ml="10px" color="purple.500">
              FAQ
            </Text>
          </Flex>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            textAlign="left"
          >
            Need{" "}
            <Text as={"span"} color={"#FE8162"} marginRight="5px">
              Answers?
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
            textAlign="left"
          >
            Check out our most commonly asked questions below to find the
            information you need.
          </Text>
        </Stack>
        <Box
          w={"full"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
        >
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ color: "purple.700" }}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        What is Manage Wise and what does it offer ?
                      </Box>
                      {isExpanded ? (
                        <CloseIcon fontSize="12px" color="purple.700" />
                      ) : (
                        <AddIcon fontSize="12px" color="purple.700" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ color: "purple.700" }}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Is Manage Wise sitable for small businessess and larger
                        enterprises alike ?
                      </Box>
                      {isExpanded ? (
                        <CloseIcon fontSize="12px" color="purple.700" />
                      ) : (
                        <AddIcon fontSize="12px" color="purple.700" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ color: "purple.700" }}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        Can I access Manange Wise from different devices and
                        platforms ?
                      </Box>
                      {isExpanded ? (
                        <CloseIcon fontSize="12px" color="purple.700" />
                      ) : (
                        <AddIcon fontSize="12px" color="purple.700" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ color: "purple.700" }}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        What kind of support options do you offer to users?
                      </Box>
                      {isExpanded ? (
                        <CloseIcon fontSize="12px" color="purple.700" />
                      ) : (
                        <AddIcon fontSize="12px" color="purple.700" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ color: "purple.700" }}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                      >
                        How secure is the data stored within Manage Wise?
                      </Box>
                      {isExpanded ? (
                        <CloseIcon fontSize="12px" color="purple.700" />
                      ) : (
                        <AddIcon fontSize="12px" color="purple.700" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
