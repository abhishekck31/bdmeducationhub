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
import { getWhatsAppLink, site } from "@/lib/site";

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

  const enrollHref = getWhatsAppLink(
    `Hello ${site.shortName}! I want to enquire about admissions for classes ${site.programs.classes}.`
  );

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
      <Container py={scrolled ? 3 : 5} transition="all 220ms ease">
        <Flex align="center" justify="space-between" gap={4}>
          <Box>
            <Link as={NextLink} href="#" _hover={{ textDecoration: "none" }}>
              <Text fontSize={{ base: "md", sm: "lg" }} fontWeight={700}>
                {site.shortName}
              </Text>
              <Text fontSize="sm" color="gray.600" lineHeight="shorter">
                {site.slogan}
              </Text>
            </Link>
          </Box>

          <DesktopNav />

          <HStack gap={3}>
            <Link
              href={enrollHref}
              target="_blank"
              rel="noopener noreferrer"
              display={{ base: "none", sm: "inline-flex" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button>
                <Box as="span">Enroll Now</Box>
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
            <DrawerHeader fontWeight={800}>{site.shortName}</DrawerHeader>
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
                  href={enrollHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button w="full">Enroll Now</Button>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerPositioner>
      </DrawerRoot>
    </Box>
  );
}
