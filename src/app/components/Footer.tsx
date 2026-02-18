"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiInstagram, FiFacebook, FiYoutube, FiArrowUpRight } from "react-icons/fi";
import { site, getWhatsAppLink } from "@/lib/site";

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
      <Container>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 10, md: 12 }}>
          <Stack gap={3}>
            <Text fontWeight={800} fontSize="lg">
              {site.shortName}
            </Text>
            <Text color="whiteAlpha.800">{site.slogan}</Text>
            <Link
              href={getWhatsAppLink(
                `Hello ${site.shortName}! I want to enquire about admissions.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              color="gold.300"
              fontWeight={700}
              display="inline-flex"
              alignItems="center"
              gap={2}
            >
              Admissions Open – Enroll Today!
              <Icon as={FiArrowUpRight} />
            </Link>
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
