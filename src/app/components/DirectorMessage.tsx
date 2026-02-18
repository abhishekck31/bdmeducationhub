"use client";

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiMessageSquare } from "react-icons/fi";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";
import { SectionHeading } from "./SectionHeading";

export function DirectorMessage() {
  return (
    <Box id="director" py={{ base: 14, md: 18 }} scrollMarginTop="var(--navbar-height)">
      <Container>
        <ScrollFadeIn>
          <SectionHeading
            eyebrow="Director’s Message"
            title="Teaching with responsibility & care"
            description="A premium learning culture built on values, discipline, and student confidence."
          />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.05}>
          <Box
            mt={{ base: 8, md: 10 }}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor="blackAlpha.100"
            bgGradient="linear(to-br, brand.50, white, gold.50)"
            boxShadow="soft"
            p={{ base: 7, md: 10 }}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              inset={0}
              bgGradient="radial(800px circle at 10% 10%, rgba(37,104,255,0.12), transparent 55%), radial(700px circle at 90% 45%, rgba(230,149,0,0.12), transparent 55%)"
            />

            <Stack gap={4} position="relative" maxW="4xl">
              <Icon as={FiMessageSquare} boxSize={7} color="brand.700" />
              <Heading size={{ base: "md", md: "lg" }}>
                “We don’t just teach chapters — we build confidence.”
              </Heading>
              <Text color="gray.700" fontSize={{ base: "md", md: "lg" }}>
                Our focus is on strong fundamentals, respectful discipline, and a
                supportive environment where students feel guided and motivated.
                With consistent practice and regular assessment, learners develop
                the skills required to perform in school exams and competitive
                tests.
              </Text>
              <Text color="gray.600" fontWeight={700}>
                — Team BDM Education Hub
              </Text>
            </Stack>
          </Box>
        </ScrollFadeIn>
      </Container>
    </Box>
  );
}
