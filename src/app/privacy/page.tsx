import type { Metadata } from "next";
import Privacy from "@/components/site/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Greenroots Training & Placements",
  description:
    "How Greenroots Training & Placements collects, uses, and protects your personal information under India's Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPage() {
  return <Privacy />;
}
