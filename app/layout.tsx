import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1a1f2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hh-consulting-fawn.vercel.app/"),
  title: "HH Consulting Architects & Engineers | Worldwide Consulting",
  description:
    "Your dedicated global partner in design and construction supervision. Engineering excellence for buildings, infrastructure, airports, bridges, and more. Serving Ethiopia and East Africa since 1992.",
  keywords: [
    "architects",
    "engineers",
    "consulting",
    "Ethiopia",
    "construction",
    "design",
    "infrastructure",
    "airport design",
    "bridge design",
    "building design",
    "HH Consulting",
  ],
  authors: [{ name: "HH Consulting Architects & Engineers PLC" }],
  creator: "HH Consulting Architects & Engineers PLC",
  icons: {
    icon: "/images/hh-logo.jpg",
    apple: "/images/hh-logo.jpg",
    shortcut: "/images/hh-logo.jpg",
  },
  openGraph: {
    title: "HH Consulting Architects & Engineers",
    description: "Worldwide Consulting - Engineering Excellence Since 1992",
    url: "https://hhconsultinget.com",
    siteName: "HH Consulting",
    locale: "en_US",
    type: "website",
    images: ["/images/hh-logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HH Consulting Architects & Engineers",
    description:
      "Your dedicated global partner in design and construction supervision",
    images: ["/images/hh-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
