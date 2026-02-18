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
import { FiFlag, FiTarget, FiEye } from "react-icons/fi";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";

const cards = [
  {
    title: "Vision",
    body: "To be the most trusted learning partner for students in Rewari — known for academic excellence and strong fundamentals.",
    icon: FiEye,
  },
  {
    title: "Mission",
    body: "Deliver concept-first teaching with disciplined practice, personal attention, and consistent assessment for measurable improvement.",
    icon: FiFlag,
  },
  {
    title: "Goal",
    body: "Help every learner build confidence, score better, and develop the habits that lead to long-term success.",
    icon: FiTarget,
  },
];

export function About() {
  return (
    <Box id="about" py={{ base: 14, md: 18 }} scrollMarginTop="var(--navbar-height)">
      <Container>
        <ScrollFadeIn>
          <Stack gap={4} maxW="3xl">
            <Heading size={{ base: "lg", md: "xl" }}>
              A premium institute built on clarity & mentorship
            </Heading>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
              We focus on strong fundamentals, structured practice, and
              supportive guidance. Our classroom environment is disciplined,
              friendly, and designed for consistent progress — from Classes
              5th–12th to special competitive batches.
            </Text>
          </Stack>
        </ScrollFadeIn>

        <SimpleGrid
          mt={{ base: 8, md: 10 }}
          columns={{ base: 1, md: 3 }}
          gap={{ base: 5, md: 6 }}
        >
          {cards.map((c, idx) => (
            <ScrollFadeIn key={c.title} delay={idx * 0.06}>
              <Box
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="blackAlpha.100"
                bg="white"
                boxShadow="soft"
                p={{ base: 6, md: 7 }}
                _hover={{ boxShadow: "softHover", transform: "translateY(-2px)" }}
                transition="all 220ms ease"
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
        </SimpleGrid>
      </Container>
    </Box>
  );
}
