"use client";

import * as React from "react";
import { MotionBox, fadeInUp } from "@/lib/motion";

export function ScrollFadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <MotionBox
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </MotionBox>
  );
}
