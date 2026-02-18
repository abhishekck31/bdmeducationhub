"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Concept Clarity",
    body: "We teach fundamentals first, using examples and step-by-step reasoning.",
  },
  {
    title: "Daily Practice",
    body: "Targeted homework + worksheets to build speed and accuracy.",
  },
  {
    title: "Weekly Tests",
    body: "Regular testing to strengthen revision and reduce exam anxiety.",
  },
  {
    title: "One-to-One Doubts",
    body: "Personal attention for tricky topics and weak areas.",
  },
  {
    title: "Progress Tracking",
    body: "Tracking + feedback so students stay on the right path consistently.",
  },
] as const;

export function Methodology() {
  return (
    <Box
      id="methodology"
      py={{ base: 14, md: 18 }}
      bg="gray.50"
      scrollMarginTop="var(--navbar-height)"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <ScrollFadeIn>
          <SectionHeading
            eyebrow="Methodology"
            title="A disciplined system that builds confidence"
            description="A premium, step-by-step learning timeline designed for steady improvement."
          />
        </ScrollFadeIn>

        <Stack mt={{ base: 10, md: 12 }} gap={{ base: 6, md: 7 }}>
          {steps.map((s, idx) => (
            <ScrollFadeIn key={s.title} delay={idx * 0.05}>
              <HStack align="flex-start" gap={4}>
                <Box position="relative" mt={1}>
                  <Box
                    w={10}
                    h={10}
                    borderRadius="xl"
                    bg="white"
                    borderWidth="1px"
                    borderColor="blackAlpha.100"
                    boxShadow="soft"
                    display="grid"
                    placeItems="center"
                    fontWeight={800}
                    color="brand.800"
                  >
                    {idx + 1}
                  </Box>
                  {idx !== steps.length - 1 ? (
                    <Box
                      position="absolute"
                      top={10}
                      left="50%"
                      transform="translateX(-50%)"
                      w="2px"
                      h={{ base: 10, md: 12 }}
                      bg="blackAlpha.200"
                      borderRadius="full"
                    />
                  ) : null}
                </Box>

                <Box
                  flex={1}
                  borderRadius="2xl"
                  bg="white"
                  borderWidth="1px"
                  borderColor="blackAlpha.100"
                  boxShadow="soft"
                  p={{ base: 6, md: 7 }}
                >
                  <Heading size="md" mb={2}>
                    {s.title}
                  </Heading>
                  <Text color="gray.600">{s.body}</Text>
                </Box>
              </HStack>
            </ScrollFadeIn>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
