"use client";

import Image from "next/image";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";
import { SectionHeading } from "./SectionHeading";

const images = [
  { src: "/gallery/01.svg", alt: "Classroom learning" },
  { src: "/gallery/02.svg", alt: "Students studying" },
  { src: "/gallery/03.svg", alt: "Mentorship" },
  { src: "/gallery/04.svg", alt: "Practice session" },
  { src: "/gallery/05.svg", alt: "Weekly tests" },
  { src: "/gallery/06.svg", alt: "Academic success" },
] as const;

export function Gallery() {
  return (
    <Box
      id="gallery"
      py={{ base: 14, md: 18 }}
      bg="gray.50"
      scrollMarginTop="var(--navbar-height)"
    >
      <Container>
        <ScrollFadeIn>
          <SectionHeading
            eyebrow="Gallery"
            title="A modern learning environment"
            description="A quick glimpse of the culture we build: focus, clarity, and confidence."
          />
        </ScrollFadeIn>

        <SimpleGrid
          mt={{ base: 8, md: 10 }}
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: 5, md: 6 }}
        >
          {images.map((img, idx) => (
            <ScrollFadeIn key={img.src} delay={idx * 0.04}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                borderWidth="1px"
                borderColor="blackAlpha.100"
                bg="white"
                boxShadow="soft"
                role="group"
              >
                <Box position="relative" w="full" h={{ base: "220px", md: "240px" }}>
                  <Box
                    as="div"
                    position="absolute"
                    inset={0}
                    transition="transform 260ms ease"
                    _groupHover={{ transform: "scale(1.04)" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>

                <Stack p={5} gap={1}>
                  <Heading size="sm">{img.alt}</Heading>
                  <Text color="gray.600" fontSize="sm">
                    Premium, student-first academic experience
                  </Text>
                </Stack>
              </Box>
            </ScrollFadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
