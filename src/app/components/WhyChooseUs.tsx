"use client";

import * as React from "react";
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
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
  FiStar,
} from "react-icons/fi";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";
import { SectionHeading } from "./SectionHeading";
import { animate, useInView } from "framer-motion";

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <Box
      ref={ref}
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="blackAlpha.100"
      bg="white"
      boxShadow="soft"
      p={{ base: 6, md: 7 }}
    >
      <Heading size="lg" color="brand.800">
        {current}
        {suffix ?? ""}
      </Heading>
      <Text color="gray.600" fontWeight={600} mt={1}>
        {label}
      </Text>
    </Box>
  );
}

const reasons = [
  {
    title: "Concept-first teaching",
    body: "We focus on clarity, not cramming — so students understand and retain.",
    icon: FiCheckCircle,
  },
  {
    title: "Mentor-led discipline",
    body: "Daily accountability and a structured rhythm for consistent growth.",
    icon: FiShield,
  },
  {
    title: "Weekly assessment",
    body: "Regular tests + feedback loop that identifies gaps early.",
    icon: FiClock,
  },
  {
    title: "Doubt-friendly environment",
    body: "No hesitation — doubts are encouraged and handled patiently.",
    icon: FiUsers,
  },
  {
    title: "Progress tracking",
    body: "Performance tracking that keeps students and parents aligned.",
    icon: FiTrendingUp,
  },
  {
    title: "Premium learning experience",
    body: "Clean notes, smart practice sets, and a supportive institute culture.",
    icon: FiStar,
  },
] as const;

export function WhyChooseUs() {
  return (
    <Box id="why" py={{ base: 14, md: 18 }} scrollMarginTop="var(--navbar-height)">
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <ScrollFadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trustworthy, academic & results-driven"
            description="A premium institute experience built around clarity, discipline, and consistent improvement."
          />
        </ScrollFadeIn>

        <SimpleGrid
          mt={{ base: 8, md: 10 }}
          columns={{ base: 1, md: 3 }}
          gap={{ base: 5, md: 6 }}
        >
          <ScrollFadeIn delay={0.0}>
            <StatCard label="Years of Experience" value={8} suffix="+" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.05}>
            <StatCard label="Students Mentored" value={1200} suffix="+" />
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <StatCard label="Success Rate" value={92} suffix="%" />
          </ScrollFadeIn>
        </SimpleGrid>

        <SimpleGrid
          mt={{ base: 8, md: 10 }}
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
        >
          {reasons.map((r, idx) => (
            <ScrollFadeIn key={r.title} delay={idx * 0.04}>
              <Box
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="blackAlpha.100"
                bg="white"
                boxShadow="soft"
                p={{ base: 6, md: 7 }}
                transition="all 220ms ease"
                _hover={{ boxShadow: "softHover", transform: "translateY(-2px)" }}
              >
                <Box
                  w={12}
                  h={12}
                  borderRadius="xl"
                  bg="gold.50"
                  display="grid"
                  placeItems="center"
                  mb={5}
                >
                  <Icon as={r.icon} boxSize={6} color="gold.600" />
                </Box>
                <Heading size="md" mb={2}>
                  {r.title}
                </Heading>
                <Text color="gray.600">{r.body}</Text>
              </Box>
            </ScrollFadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
