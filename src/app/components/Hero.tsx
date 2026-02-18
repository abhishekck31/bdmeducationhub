"use client";

import * as React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";
import { MotionBox } from "@/lib/motion";
import { getWhatsAppLink, site } from "@/lib/site";

export function Hero() {
  const enrollHref = getWhatsAppLink(
    `Hello ${site.shortName}! I want to enrol / enquire about admissions.`
  );

  return (
    <Box
      id="home"
      position="relative"
      overflow="hidden"
      pt={{ base: 14, md: 18 }}
      pb={{ base: 18, md: 24 }}
      scrollMarginTop="var(--navbar-height)"
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, white, brand.50)"
      />

      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at 18% 22%, brand.100 0%, transparent 55%), radial(circle at 82% 14%, gold.100 0%, transparent 52%), radial(circle at 78% 82%, brand.50 0%, transparent 58%)"
      />

      <MotionBox
        position="absolute"
        top={{ base: "-120px", md: "-160px" }}
        left={{ base: "-140px", md: "-180px" }}
        w={{ base: "260px", md: "360px" }}
        h={{ base: "260px", md: "360px" }}
        bgGradient="radial(circle at 30% 30%, brand.200 0%, transparent 65%)"
        borderRadius="full"
        filter="blur(6px)"
        opacity={0.65}
        animate={{ y: [0, 14, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom={{ base: "-140px", md: "-190px" }}
        right={{ base: "-140px", md: "-190px" }}
        w={{ base: "300px", md: "420px" }}
        h={{ base: "300px", md: "420px" }}
        bgGradient="radial(circle at 30% 30%, gold.200 0%, transparent 65%)"
        borderRadius="full"
        filter="blur(8px)"
        opacity={0.55}
        animate={{ y: [0, -12, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container position="relative" maxW="6xl" px={{ base: 4, md: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.45, 0.1, 1] }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
            gap={{ base: 12, lg: 16 }}
          >
            <Stack gap={{ base: 7, md: 8 }} maxW={{ lg: "2xl" }}>
              <HStack gap={3} flexWrap="wrap">
                <Badge
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="white"
                  color="brand.800"
                  borderWidth="1px"
                  borderColor="brand.100"
                >
                  Classes {site.programs.classes}
                </Badge>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="white"
                  color="brand.800"
                  borderWidth="1px"
                  borderColor="brand.100"
                >
                  Navodaya • Sainik School
                </Badge>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="gold.100"
                  color="gold.800"
                  borderWidth="1px"
                  borderColor="gold.200"
                >
                  Admissions Open
                </Badge>
              </HStack>

              <Stack gap={2}>
                <Text
                  color="brand.800"
                  fontWeight={700}
                  letterSpacing="0.02em"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  {site.slogan}
                </Text>
                <Box
                  h="3px"
                  w={{ base: 16, md: 20 }}
                  bg="gold.400"
                  borderRadius="full"
                />
              </Stack>

              <Heading
                as="h1"
                color="gray.900"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "5xl" }}
                lineHeight={{ base: "1.18", md: "1.08" }}
                letterSpacing="-0.02em"
              >
                Strong fundamentals. Clear concepts. Confident results.
              </Heading>

              <Text
                color="gray.700"
                fontSize={{ base: "lg", md: "xl" }}
                maxW={{ lg: "xl" }}
              >
                {site.name} helps students build disciplined study habits with
                focused teaching, regular tests, and personal attention — from
                school tuition to competitive exam batches.
              </Text>

              <Stack
                direction={{ base: "column", sm: "row" }}
                gap={{ base: 3, sm: 4 }}
                w="full"
                align={{ base: "stretch", sm: "center" }}
              >
                <Link
                  href={enrollHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    size="lg"
                    bgGradient="linear(to-r, brand.700, brand.600)"
                    color="white"
                    boxShadow="soft"
                    _hover={{ bgGradient: "linear(to-r, brand.800, brand.700)" }}
                    w={{ base: "full", sm: "auto" }}
                  >
                    <Box as="span">Enroll Now</Box>
                    <Icon as={FiArrowUpRight} ms={2} />
                  </Button>
                </Link>

                <Link
                  href={getWhatsAppLink(
                    `Hello ${site.shortName}! I want to know about course details and fees.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="brand.200"
                    color="brand.800"
                    bg="white"
                    _hover={{ bg: "brand.50" }}
                    w={{ base: "full", sm: "auto" }}
                  >
                    <Icon as={FiMessageCircle} me={2} />
                    <Box as="span">WhatsApp</Box>
                  </Button>
                </Link>
              </Stack>

              <Text color="gray.600" fontSize="sm">
                Rewari, Haryana • Academic-first coaching focused on discipline
                and student growth.
              </Text>
            </Stack>

            <Box
              w={{ base: "full", lg: "420px" }}
              borderRadius="2xl"
              bg="white"
              borderWidth="1px"
              borderColor="gray.100"
              boxShadow="soft"
              p={{ base: 5, md: 6 }}
            >
              <Stack gap={4}>
                <HStack justify="space-between" align="flex-start">
                  <Box>
                    <Heading size="md" color="gray.900">
                      Special Batches
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                      Structured prep + weekly tests
                    </Text>
                  </Box>
                  <Badge
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="gold.100"
                    color="gold.800"
                    borderWidth="1px"
                    borderColor="gold.200"
                  >
                    Limited Seats
                  </Badge>
                </HStack>

                <Text color="gray.700" lineHeight="1.6">
                  Choose a batch and get a simple plan tailored to your level.
                </Text>
                <Stack gap={2}>
                  {site.programs.specialBatches.map((b) => (
                    <Box
                      key={b}
                      borderRadius="xl"
                      bg="brand.50"
                      borderWidth="1px"
                      borderColor="brand.100"
                      px={4}
                      py={{ base: 3, md: 4 }}
                    >
                      <Text color="gray.900" fontWeight={700}>
                        {b}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        Weekly tests, doubt sessions, and focused practice
                      </Text>
                    </Box>
                  ))}
                </Stack>

                <Box
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gold.200"
                  bg="gold.50"
                  px={4}
                  py={3}
                >
                  <Text color="gray.900" fontWeight={700}>
                    Classes {site.programs.classes}
                  </Text>
                  <Text color="gray.700" fontSize="sm">
                    Foundation building • Boards support • Regular evaluation
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
}
