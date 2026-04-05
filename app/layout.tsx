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
  title: "Un·Project — Premium Student Project Handler & Provider",
  description:
    "Premium B.Tech & Masters project delivery. We build, setup, and explain every line. Original code, fast delivery, and absolute confidentiality.",
  keywords: [
    "Un·Project",
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
    "Un Project",
    "Project Implementation"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://unproject.app"),
  openGraph: {
    title: "Un·Project — Professional Project Handler",
    description:
      "Premium B.Tech & Masters project delivery. We build, setup, and explain every line. The ultimate provider for your academic engineering needs.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://unproject.app",
    siteName: "Un·Project",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Un·Project — Elite Project Delivery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Un·Project — Professional Project Handler",
    description:
      "Premium B.Tech & Masters project delivery. We build, setup, and explain every line. Original code, fast delivery, and absolute confidentiality.",
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
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%2310B981'/></svg>" />
      </head>
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
