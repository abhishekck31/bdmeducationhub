import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  cssVarsPrefix: "bdm",
  globalCss: {
    body: {
      bg: "white",
      color: "gray.800",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-primary)" },
        body: { value: "var(--font-primary)" },
      },
      colors: {
        brand: {
          50: { value: "#eaf2ff" },
          100: { value: "#cfe0ff" },
          200: { value: "#a4c2ff" },
          300: { value: "#79a3ff" },
          400: { value: "#4e85ff" },
          500: { value: "#2568ff" },
          600: { value: "#1a51cc" },
          700: { value: "#133c99" },
          800: { value: "#0c2766" },
          900: { value: "#061433" },
        },
        gold: {
          50: { value: "#fff8e6" },
          100: { value: "#ffe9b3" },
          200: { value: "#ffd680" },
          300: { value: "#ffc24d" },
          400: { value: "#ffaf1a" },
          500: { value: "#e69500" },
          600: { value: "#b37400" },
          700: { value: "#805300" },
          800: { value: "#4d3200" },
          900: { value: "#1a1100" },
        },
      },
      radii: {
        xl: { value: "1.25rem" },
        "2xl": { value: "1.75rem" },
      },
      shadows: {
        soft: { value: "0 10px 30px rgba(15, 23, 42, 0.10)" },
        softHover: { value: "0 16px 45px rgba(15, 23, 42, 0.14)" },
        glass: { value: "0 10px 30px rgba(2, 6, 23, 0.10)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
