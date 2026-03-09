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
  const [course, setCourse] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [source, setSource] = React.useState("");

  const buildWhatsAppMessage = () => {
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanCourse = course.trim();
    const cleanMessage = message.trim();
    const cleanSource = source.trim();

    return [
      `Hello ${site.shortName}! I want to enquire about admissions.`,
      "",
      `Name: ${cleanName || "-"}`,
      `Phone: ${cleanPhone || "-"}`,
      `Course: ${cleanCourse || "-"}`,
      `Source: ${cleanSource || "-"}`,
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
    setCourse("");
    setMessage("");
    setSource("");
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

                  <Stack direction={{ base: "column", sm: "row" }} gap={4} w="full">
                    <Field.Root>
                      <Field.Label>Your Name</Field.Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        bg="transparent"
                      />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>Phone Number</Field.Label>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder=""
                        required
                        bg="transparent"
                      />
                    </Field.Root>
                  </Stack>

                  <Field.Root>
                    <Field.Label>Course Interested In (Dropdown)</Field.Label>
                    <Box
                      asChild
                      w="full"
                      h="10"
                      px={3}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="blackAlpha.200"
                      bg="transparent"
                      _focus={{ outline: "2px solid", outlineColor: "brand.500", outlineOffset: "-1px" }}
                    >
                      <select
                        value={course}
                        onChange={(e: any) => setCourse(e.target.value)}
                      >
                        <option value="" disabled hidden>Select a Course</option>
                        <option value="Classes 1st to 12th">Classes 1st to 12th</option>
                        <option value="Navodaya Exam">Navodaya Exam</option>
                        <option value="Sainik School Exam">Sainik School Exam</option>
                        <option value="Military School Exam">Military School Exam</option>
                        <option value="Gurukul">Gurukul</option>
                        <option value="CUET Preparation">CUET Preparation</option>
                      </select>
                    </Box>
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Specific Query (Optional)</Field.Label>
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What do you want to ask?"
                      bg="transparent"
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>How did you hear about us? (Optional)</Field.Label>
                    <Box
                      asChild
                      w="full"
                      h="10"
                      px={3}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="blackAlpha.200"
                      bg="transparent"
                      _focus={{ outline: "2px solid", outlineColor: "brand.500", outlineOffset: "-1px" }}
                    >
                      <select
                        value={source}
                        onChange={(e: any) => setSource(e.target.value)}
                      >
                        <option value="" disabled hidden>Select Source</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Friend/Relative">Friend / Relative</option>
                        <option value="Banner/Hoarding">Banner / Hoarding / Pamphlet</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Former Student">Former Student</option>
                      </select>
                    </Box>
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
