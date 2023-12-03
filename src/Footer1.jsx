"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  chakra,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer1() {
  return (
    <Box bg="#FDF2EC" color={"#33334B"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Image
          src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
          alt="Logo"
          htmlHeight="50px"
          htmlWidth="150px"
        />
        <Stack direction={"column"} spacing={6}>
          <Box
            as="a"
            href={"#"}
            _hover={{
              color: "#767575",
            }}
          >
            Features
          </Box>
          <Box
            as="a"
            href={"#"}
            _hover={{
              color: "#767575",
            }}
          >
            FAQ
          </Box>
          <Box
            as="a"
            href={"#"}
            _hover={{
              color: "#767575",
            }}
          >
            Pricing
          </Box>
          <Box
            as="a"
            href={"#"}
            _hover={{
              color: "#767575",
            }}
          >
            Testimonials
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 ManageWise, Inc.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"#"}>
              <FaLinkedinIn />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
