import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project X — Premium Student Project Handler & Provider",
  description:
    "Elite academic engineering. We build, setup, and explain your B.Tech & Masters projects. Full Stack, AI/ML, Blockchain, Java, Python — delivered fast, explained fully.",
  keywords: [
    "Project X",
    "Project Handler",
    "Project Provider",
    "Student Project Delivery",
    "B.Tech Final Year Projects",
    "Academic Coding Service",
    "Custom Softwares",
    "Fast Project Delivery",
    "Project Setup Help",
    "Code Explanation Service",
    "Professional Project Builders",
    "X Project",
    "Project Implementation"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://projectx.app"),
  openGraph: {
    title: "Project X — Professional Project Handler",
    description:
      "We Build. We Setup. We Explain. The ultimate provider for your academic engineering needs.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://projectx.app",
    siteName: "Project X",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Project X — Elite Project Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project X — Premium Project Provider",
    description:
      "Full Stack · AI/ML · Security · Python — We build, setup and explain it for you.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import { PostHogProvider } from "@/components/providers/PostHogProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased" style={{ fontFamily: "var(--font-body)" }}>
        <PostHogProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-green-500 focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>
          <main id="main-content">{children}</main>
        </PostHogProvider>
      </body>
    </html>
  );
}
