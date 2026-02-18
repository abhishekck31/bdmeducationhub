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

  const buildWhatsAppMessage = () => {
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanMessage = message.trim();

    return [
      `Hello ${site.shortName}! I want to enquire about admissions.`,
      "",
      `Name: ${cleanName || "-"}`,
      `Phone: ${cleanPhone || "-"}`,
      `Message: ${cleanMessage || "-"}`,
    ].join("\n");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      toaster.create({
        title: "Please fill required details",
        description: "Enter your name and phone number to continue.",
        type: "error",
      });
      return;
    }

    const waHref = getWhatsAppLink(buildWhatsAppMessage());
    window.open(waHref, "_blank", "noopener,noreferrer");
    toaster.create({
      title: "Opening WhatsApp…",
      description: "Send the message there to complete your enquiry.",
      type: "success",
    });

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <Box id="contact" py={{ base: 14, md: 18 }} scrollMarginTop="var(--navbar-height)">
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
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
                  <Heading size="md">Enquiry Form</Heading>

                  <Field.Root>
                    <Field.Label>Your Name</Field.Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Phone Number</Field.Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone / WhatsApp number"
                      required
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

                  <Button type="submit" bg="brand.700" color="white" _hover={{ bg: "brand.800" }}>
                    <Box as="span">Enquire Now</Box>
                    <Icon as={FiSend} ms={2} />
                  </Button>

                  <Text color="gray.600" fontSize="sm">
                    On submit, WhatsApp will open with your details.
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
