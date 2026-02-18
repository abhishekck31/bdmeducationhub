"use client";

import { ChakraProvider, Toaster, Toast } from "@chakra-ui/react";
import { system } from "@/theme/theme";
import { toaster } from "@/lib/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
      <Toaster toaster={toaster}>
        {(t) => (
          <Toast.Root>
            <Toast.Indicator />
            <Toast.Title>{t.title}</Toast.Title>
            {t.description ? (
              <Toast.Description>{t.description}</Toast.Description>
            ) : null}
            <Toast.CloseTrigger />
          </Toast.Root>
        )}
      </Toaster>
    </ChakraProvider>
  );
}
