"use client";

import * as React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Field,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { ScrollFadeIn } from "@/lib/ScrollFadeIn";
import { SectionHeading } from "./SectionHeading";
import { getWhatsAppLink, site } from "@/lib/site";
import { toaster } from "@/lib/toaster";

export function Contact() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toaster.create({
      title: "Thanks! We received your message.",
      description:
        "This form is frontend-only. Please WhatsApp us for fastest response.",
      type: "success",
    });
    setName("");
    setPhone("");
    setMessage("");
  };

  const waHref = getWhatsAppLink(
    `Hello ${site.shortName}! My name is ${name || ""}. I want to enquire about admissions. Phone: ${phone || ""}. Message: ${message || ""}`.trim()
  );

  return (
    <Box id="contact" py={{ base: 14, md: 18 }} scrollMarginTop="var(--navbar-height)">
      <Container>
        <ScrollFadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s plan your child’s success"
            description="Visit our institute in Rewari or message us on WhatsApp for quick course & admission guidance."
          />
        </ScrollFadeIn>

        <SimpleGrid
          mt={{ base: 8, md: 10 }}
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 6, md: 8 }}
        >
          <ScrollFadeIn>
            <Box
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="blackAlpha.100"
              bg="white"
              boxShadow="soft"
              p={{ base: 6, md: 7 }}
            >
              <Stack gap={5}>
                <HStack gap={3} align="flex-start">
                  <Icon as={FiMapPin} boxSize={5} color="brand.700" mt={1} />
                  <Box>
                    <Heading size="sm">Address</Heading>
                    <Text color="gray.600">
                      {site.addressLines.map((l) => (
                        <React.Fragment key={l}>
                          {l}
                          <br />
                        </React.Fragment>
                      ))}
                    </Text>
                  </Box>
                </HStack>

                <HStack gap={3} align="flex-start">
                  <Icon as={FiPhone} boxSize={5} color="brand.700" mt={1} />
                  <Box>
                    <Heading size="sm">WhatsApp</Heading>
                    <Text color="gray.600">{site.whatsappNumber}</Text>
                    <Link
                      href={getWhatsAppLink(
                        `Hello ${site.shortName}! I want to enquire about admissions.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      mt={3}
                      display="inline-flex"
                      _hover={{ textDecoration: "none" }}
                    >
                      <Button>
                        <Box as="span">WhatsApp Now</Box>
                        <Icon as={FiSend} ms={2} />
                      </Button>
                    </Link>
                  </Box>
                </HStack>

                <Box>
                  <Heading size="sm" mb={2}>
                    Social
                  </Heading>
                  <Stack gap={1}>
                    <Link
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="brand.700"
                    >
                      Instagram
                    </Link>
                    <Link
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="brand.700"
                    >
                      Facebook
                    </Link>
                    <Link
                      href={site.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="brand.700"
                    >
                      YouTube
                    </Link>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.05}>
            <Box
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="blackAlpha.100"
              bg="white"
              boxShadow="soft"
              p={{ base: 6, md: 7 }}
            >
              <form onSubmit={onSubmit}>
                <Stack gap={4}>
                  <Heading size="md">Send a message</Heading>

                  <Field.Root>
                    <Field.Label>Your Name</Field.Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Phone Number</Field.Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone / WhatsApp number"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What do you want to ask?"
                      rows={5}
                    />
                  </Field.Root>

                  <HStack gap={3} flexWrap="wrap">
                    <Button type="submit">
                      <Box as="span">Submit</Box>
                      <Icon as={FiSend} ms={2} />
                    </Button>
                    <Link
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      _hover={{ textDecoration: "none" }}
                    >
                      <Button variant="outline">Continue on WhatsApp</Button>
                    </Link>
                  </HStack>

                  <Text color="gray.600" fontSize="sm">
                    Note: Form submission is frontend-only. For fastest response,
                    please WhatsApp us.
                  </Text>
                </Stack>
              </form>
            </Box>
          </ScrollFadeIn>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
