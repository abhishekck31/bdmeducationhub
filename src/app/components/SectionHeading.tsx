import { HStack, Stack, Text, Heading, Box } from "@chakra-ui/react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Stack gap={3} maxW="3xl">
      {eyebrow ? (
        <HStack gap={3} align="center">
          <Box w={10} h="2px" bg="gold.400" borderRadius="full" />
          <Text fontWeight={700} color="brand.700" letterSpacing="0.06em">
            {eyebrow}
          </Text>
        </HStack>
      ) : null}
      <Heading size={{ base: "lg", md: "xl" }} letterSpacing="-0.01em">
        {title}
      </Heading>
      {description ? (
        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}
