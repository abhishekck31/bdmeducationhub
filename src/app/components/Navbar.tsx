"use client";

import * as React from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
  DrawerRoot,
  DrawerBackdrop,
  DrawerPositioner,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseTrigger,
  type DrawerOpenChangeDetails,
} from "@chakra-ui/react";
import { FiMenu, FiArrowUpRight, FiX } from "react-icons/fi";
import { site } from "@/lib/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why" },
  { label: "Methodology", href: "#methodology" },
  { label: "Director", href: "#director" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function DesktopNav() {
  return (
    <HStack gap={7} display={{ base: "none", lg: "flex" }}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          fontWeight={500}
          color="gray.700"
          position="relative"
          _hover={{ color: "gray.900", _after: { transform: "scaleX(1)" } }}
          _after={{
            content: '""',
            position: "absolute",
            left: 0,
            bottom: "-8px",
            height: "2px",
            width: "100%",
            bg: "gold.400",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 220ms ease",
            borderRadius: "full",
          }}
        >
          {link.label}
        </Link>
      ))}
    </HStack>
  );
}

export function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      w="full"
      backdropFilter="blur(14px)"
      bg={scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.58)"}
      borderBottomWidth="1px"
      borderColor={scrolled ? "blackAlpha.100" : "transparent"}
      boxShadow={scrolled ? "glass" : "none"}
      transition="all 220ms ease"
    >
      <Container
        maxW="6xl"
        px={{ base: 4, md: 6 }}
        py={scrolled ? 3 : 5}
        transition="all 220ms ease"
      >
        <Flex align="center" justify="space-between" gap={4}>
          <Box>
            <Link as={NextLink} href="#home" _hover={{ textDecoration: "none" }}>
              <HStack gap={{ base: 3, md: 3.5 }} align="center">
                <Image
                  src="/logo.jpeg"
                  alt={`${site.shortName} logo`}
                  w={{ base: "38px", sm: "44px" }}
                  h={{ base: "38px", sm: "44px" }}
                  objectFit="contain"
                  flexShrink={0}
                />
                <Stack gap={0} lineHeight="shorter">
                  <Text
                    fontSize={{ base: "lg", sm: "xl" }}
                    fontWeight={800}
                    color="brand.900"
                  >
                    {site.shortName}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", sm: "md" }}
                    color="gray.600"
                    fontWeight={600}
                  >
                    {site.slogan}
                  </Text>
                </Stack>
              </HStack>
            </Link>
          </Box>

          <DesktopNav />

          <HStack gap={3}>
            <Link
              as={NextLink}
              href="#contact"
              display={{ base: "none", sm: "inline-flex" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button bg="brand.700" color="white" _hover={{ bg: "brand.800" }}>
                <Box as="span">Enquire Now</Box>
                <Icon as={FiArrowUpRight} ms={2} />
              </Button>
            </Link>

            <IconButton
              aria-label="Open menu"
              variant="ghost"
              display={{ base: "inline-flex", lg: "none" }}
              onClick={onOpen}
            >
              <Icon as={FiMenu} />
            </IconButton>
          </HStack>
        </Flex>
      </Container>

      <DrawerRoot
        open={open}
        onOpenChange={(details: DrawerOpenChangeDetails) =>
          details.open ? onOpen() : onClose()
        }
        size="sm"
        placement="end"
      >
        <DrawerBackdrop />
        <DrawerPositioner>
          <DrawerContent>
            <DrawerHeader fontWeight={800}>
              <HStack gap={3}>
                <Image
                  src="/logo.jpeg"
                  alt={`${site.shortName} logo`}
                  w="36px"
                  h="36px"
                  objectFit="contain"
                />
                <Stack gap={0} lineHeight="shorter">
                  <Text fontWeight={800}>{site.shortName}</Text>
                  <Text fontSize="sm" color="gray.600" fontWeight={600}>
                    {site.slogan}
                  </Text>
                </Stack>
              </HStack>
            </DrawerHeader>
            <DrawerCloseTrigger
              position="absolute"
              top="3"
              right="3"
              aria-label="Close menu"
              p="2"
              borderRadius="xl"
              _hover={{ bg: "blackAlpha.50" }}
            >
              <Icon as={FiX} />
            </DrawerCloseTrigger>
            <DrawerBody>
              <Stack gap={4} pt={2}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    fontSize="lg"
                    fontWeight={600}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  as={NextLink}
                  href="#contact"
                  onClick={onClose}
                  _hover={{ textDecoration: "none" }}
                >
                  <Button w="full" bg="brand.700" color="white" _hover={{ bg: "brand.800" }}>
                    Enquire Now
                  </Button>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerPositioner>
      </DrawerRoot>
    </Box>
  );
}
