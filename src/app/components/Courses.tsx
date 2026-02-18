"use client";

import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiBookOpen,
  FiClipboard,
  FiAward,
  FiTrendingUp,
  FiHelpCircle,
} from "react-icons/fi";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";
import { SectionHeading } from "./SectionHeading";

const courses = [
  {
    title: "School Tuition (5th–12th)",
    body: "Board-focused teaching with concept clarity, notes, and practice that improves marks steadily.",
    icon: FiBookOpen,
  },
  {
    title: "Foundation Courses",
    body: "Build strong base in Maths & Science with structured chapters, worksheets, and revision cycles.",
    icon: FiClipboard,
  },
  {
    title: "Competitive Exam Prep",
    body: "Special batches for Navodaya & Sainik School with weekly tests and performance tracking.",
    icon: FiAward,
  },
  {
    title: "Career Guidance",
    body: "Smart study planning, exam strategy, and goal-setting guidance for students and parents.",
    icon: FiTrendingUp,
  },
  {
    title: "Doubt Sessions",
    body: "One-to-one doubt clearing with patient explanations and personalized improvement tips.",
    icon: FiHelpCircle,
  },
] as const;

export function Courses() {
  return (
    <Box
      id="courses"
      py={{ base: 14, md: 18 }}
      bg="gray.50"
      scrollMarginTop="var(--navbar-height)"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <ScrollFadeIn>
          <SectionHeading
            eyebrow="Courses"
            title="Programs designed for results"
            description="Premium learning experience with structured teaching, consistent practice, and mentor-led guidance."
          />
        </ScrollFadeIn>

        <SimpleGrid
          mt={{ base: 8, md: 10 }}
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
        >
          {courses.map((c, idx) => (
            <ScrollFadeIn key={c.title} delay={idx * 0.05}>
              <Box
                borderRadius="2xl"
                bg="white"
                borderWidth="1px"
                borderColor="blackAlpha.100"
                boxShadow="soft"
                p={{ base: 6, md: 7 }}
                transition="all 220ms ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "softHover",
                }}
              >
                <Box
                  w={12}
                  h={12}
                  borderRadius="xl"
                  bg="brand.50"
                  display="grid"
                  placeItems="center"
                  mb={5}
                >
                  <Icon as={c.icon} boxSize={6} color="brand.700" />
                </Box>

                <Heading size="md" mb={2}>
                  {c.title}
                </Heading>
                <Text color="gray.600">{c.body}</Text>
              </Box>
            </ScrollFadeIn>
          ))}

          <ScrollFadeIn delay={courses.length * 0.05}>
            <Box
              borderRadius="2xl"
              bgGradient="linear(to-br, brand.800, brand.700, gold.400)"
              color="white"
              p={{ base: 6, md: 7 }}
              boxShadow="glass"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                inset={0}
                bgGradient="radial(520px circle at 20% 10%, rgba(255,255,255,0.18), transparent 60%), radial(600px circle at 80% 65%, rgba(255,255,255,0.14), transparent 60%)"
              />
              <Stack gap={3} position="relative">
                <Heading size="md">Admissions Open</Heading>
                <Text color="whiteAlpha.900">
                  Enroll today and get a structured study plan.
                </Text>
                <Text fontSize="sm" color="whiteAlpha.900">
                  Limited seats for special batches.
                </Text>
              </Stack>
            </Box>
          </ScrollFadeIn>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
