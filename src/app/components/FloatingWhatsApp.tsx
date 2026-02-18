"use client";

import { Icon, Link, Box } from "@chakra-ui/react";
import { FiMessageCircle } from "react-icons/fi";
import { getWhatsAppLink, site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <Box position="fixed" right={{ base: 4, md: 6 }} bottom={{ base: 4, md: 6 }} zIndex={2000}>
      <Link
        href={getWhatsAppLink(
          `Hello ${site.shortName}! I want to enquire about admissions.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={12}
        h={12}
        borderRadius="full"
        bg="brand.600"
        color="white"
        boxShadow="softHover"
        transition="all 200ms ease"
        _hover={{ bg: "brand.700", transform: "translateY(-2px)", textDecoration: "none" }}
        _active={{ bg: "brand.800" }}
      >
        <Icon as={FiMessageCircle} boxSize={5} />
      </Link>
    </Box>
  );
}
