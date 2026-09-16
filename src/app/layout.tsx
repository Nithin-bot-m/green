import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import SiteShell from "@/components/site/SiteShell";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greenroots Training & Placements — Job-Ready Tech Courses in Hyderabad",
  description:
    "Greenroots is a technology training institute in Hyderabad offering job-ready courses in Power BI, Data Analytics, Business Analysis, DevSecOps and Software Testing — with a free career audit and placement support.",
  keywords: [
    "tech training Hyderabad",
    "Power BI course Hyderabad",
    "data analytics course",
    "business analyst training",
    "DevSecOps course",
    "software testing course",
    "AI product management course",
    "Tosca automation training",
    "placement training Hyderabad",
    "CRT training",
  ],
  authors: [{ name: "Greenroots Training & Placements" }],
  openGraph: {
    title: "Greenroots Training & Placements",
    description:
      "Job-ready technology training in Hyderabad — career audit, personalised counselling, and placement support.",
    siteName: "Greenroots",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3d2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
