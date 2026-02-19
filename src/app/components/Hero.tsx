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
import { FiArrowUpRight } from "react-icons/fi";
import { MotionBox } from "@/lib/motion";
import { site } from "@/lib/site";

export function Hero() {
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
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  bgGradient="linear(to-r, brand.50, gold.50)"
                  color="brand.800"
                  borderWidth="2px"
                  borderColor="brand.200"
                  fontWeight={800}
                  fontSize={{ base: "sm", md: "md" }}
                  boxShadow="0 2px 8px 0 #e3eafc"
                  letterSpacing="0.01em"
                >
                  Classes {site.programs.classes}
                </Badge>
                <Badge
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  bgGradient="linear(to-r, brand.50, gold.50)"
                  color="brand.800"
                  borderWidth="2px"
                  borderColor="brand.200"
                  fontWeight={800}
                  fontSize={{ base: "sm", md: "md" }}
                  boxShadow="0 2px 8px 0 #e3eafc"
                  letterSpacing="0.01em"
                >
                  Navodaya • Sainik School • Military School • Gurukul
                </Badge>
                <Badge
                  px={4}
                  py={1.5}
                  borderRadius="full"
                  bgGradient="linear(to-r, gold.100, gold.50)"
                  color="gold.800"
                  borderWidth="2px"
                  borderColor="gold.300"
                  fontWeight={800}
                  fontSize={{ base: "sm", md: "md" }}
                  boxShadow="0 2px 8px 0 #fffbe6"
                  letterSpacing="0.01em"
                >
                  Admissions Open
                </Badge>
              </HStack>

              {/* CUET Preparation Badge - visually attractive, premium style */}
              <Box display="flex" mt={2} mb={1}>
                <Badge
                  px={6}
                  py={2.5}
                  borderRadius="full"
                  bgGradient="linear(to-r, gold.50, brand.50)"
                  color="brand.800"
                  borderWidth="2px"
                  borderColor="gold.400"
                  fontWeight={900}
                  fontSize={{ base: "md", md: "lg" }}
                  boxShadow="0 4px 18px 0 rgba(33, 82, 255, 0.10), 0 1.5px 8px 0 rgba(255, 215, 0, 0.10)"
                  letterSpacing="0.01em"
                  style={{
                    background: "linear-gradient(90deg, #f7fafc 0%, #fffbe6 100%)",
                  }}
                  _light={{ borderColor: "gold.400", color: "brand.700" }}
                  _dark={{ borderColor: "gold.300", color: "gold.200" }}
                  textAlign="center"
                  whiteSpace="pre-line"
                >
                  CUET Preparation – Essential for Today’s Students
                </Badge>
              </Box>

              <Stack gap={2}>
                <Text
                  color="brand.800"
                  fontWeight={800}
                  letterSpacing="0.02em"
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign="left"
                  mb={1}
                  sx={{ textShadow: "0 1px 8px #fffbe6" }}
                >
                  A Strong Foundation for a Successful Future.
                </Text>
                <Box
                  h="3px"
                  w={{ base: 20, md: 28 }}
                  bgGradient="linear(to-r, gold.400, brand.200)"
                  borderRadius="full"
                  boxShadow="0 1px 6px 0 #e3eafc"
                />
              </Stack>

              <Box>
                <Heading
                  as="h1"
                  color="brand.900"
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                  lineHeight={1.1}
                  letterSpacing="-0.02em"
                  fontWeight={900}
                  mb={1}
                  sx={{ textShadow: "0 2px 12px #e3eafc" }}
                >
                  Strong fundamentals.
                </Heading>
                <Heading
                  as="h1"
                  color="brand.700"
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                  lineHeight={1.1}
                  letterSpacing="-0.02em"
                  fontWeight={900}
                  mb={1}
                  sx={{ textShadow: "0 2px 12px #fffbe6" }}
                >
                  Clear concepts.
                </Heading>
                <Heading
                  as="h1"
                  color="gold.700"
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                  lineHeight={1.1}
                  letterSpacing="-0.02em"
                  fontWeight={900}
                  sx={{ textShadow: "0 2px 12px #e3eafc" }}
                >
                  Confident results.
                </Heading>
              </Box>


              <Text
                color="gray.700"
                fontSize={{ base: "md", md: "xl" }}
                maxW={{ base: "100%", md: "90%", lg: "xl" }}
                fontWeight={500}
                mt={2}
                mb={2}
                sx={{ textShadow: "0 1px 8px #f7fafc" }}
              >
                {site.name} helps students build disciplined study habits with focused teaching, regular tests, and personal attention — from school tuition to competitive exam batches.
              </Text>


              <Link href="#contact" _hover={{ textDecoration: "none" }} width={{ base: "100%", sm: "auto" }}>
                <Button
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="full"
                  bgGradient="linear(to-r, brand.700, gold.400)"
                  color="white"
                  fontWeight={800}
                  fontSize={{ base: "md", md: "lg" }}
                  boxShadow="0 4px 18px 0 rgba(33, 82, 255, 0.10), 0 1.5px 8px 0 rgba(255, 215, 0, 0.10)"
                  _hover={{ bgGradient: "linear(to-r, brand.800, gold.500)", transform: "scale(1.04)" }}
                  w={{ base: "full", sm: "auto" }}
                  transition="all 0.2s cubic-bezier(.4,1,.7,1)"
                >
                  <Box as="span">Enquire Now</Box>
                  <Icon as={FiArrowUpRight} ms={2} />
                </Button>
              </Link>

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
