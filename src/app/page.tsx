"use client";

import { Box } from "@chakra-ui/react";
import { MotionBox } from "@/lib/motion";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Methodology } from "./components/Methodology";
import { DirectorMessage } from "./components/DirectorMessage";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.21, 0.45, 0.1, 1] }}
    >
      <Navbar />
      <Box as="main">
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Methodology />
        <DirectorMessage />
        <Gallery />
        <Contact />
      </Box>
      <Footer />
      <FloatingWhatsApp />
    </MotionBox>
  );
}
