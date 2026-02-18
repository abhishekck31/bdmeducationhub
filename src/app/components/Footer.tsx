"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  HStack,
  Icon,
  Image,
  Link,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { site } from "@/lib/site";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Methodology", href: "#methodology" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <Box bg="gray.900" color="white" py={{ base: 12, md: 14 }}>
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 10, md: 12 }}>
          <Stack gap={3}>
            <HStack gap={3} align="center">
              <Box bg="white" borderRadius="xl" p="1">
                <Image
                  src="/logo.jpeg"
                  alt={`${site.shortName} logo`}
                  w="46px"
                  h="46px"
                  objectFit="contain"
                />
              </Box>
              <Stack gap={0} lineHeight="shorter">
                <Text fontWeight={800} fontSize="lg">
                  {site.shortName}
                </Text>
                <Text color="whiteAlpha.800" fontWeight={600}>
                  {site.slogan}
                </Text>
              </Stack>
            </HStack>
          </Stack>

          <Stack gap={3}>
            <Text fontWeight={800}>Quick Links</Text>
            <Stack gap={2}>
              {quickLinks.map((l) => (
                <Link key={l.href} as={NextLink} href={l.href} color="whiteAlpha.800">
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack gap={3}>
            <Text fontWeight={800}>Connect</Text>
            <HStack gap={4}>
              <Link
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon as={FiInstagram} boxSize={5} />
              </Link>
              <Link
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon as={FiFacebook} boxSize={5} />
              </Link>
              <Link
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon as={FiYoutube} boxSize={5} />
              </Link>
            </HStack>
            <Text color="whiteAlpha.800" fontSize="sm">
              {site.addressLines.join(", ")}
            </Text>
          </Stack>
        </SimpleGrid>

        <Separator my={8} bg="whiteAlpha.200" h="1px" display="block" />
        <Text color="whiteAlpha.700" fontSize="sm">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
