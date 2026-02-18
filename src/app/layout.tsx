import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bimla Devi Memorial Education Hub",
    template: "%s | BDM Education Hub",
  },
  description:
    "Bimla Devi Memorial Education Hub (BDM Education Hub) — premium academic mentorship and concept clarity for classes 5th to 12th, including Navodaya and Sainik School exam batches.",
  openGraph: {
    title: "Bimla Devi Memorial Education Hub",
    description:
      "Premium academic mentorship and concept clarity for classes 5th to 12th. Special batches for Navodaya and Sainik School exams.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
