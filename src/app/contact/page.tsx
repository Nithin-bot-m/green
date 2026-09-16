import type { Metadata } from "next";
import Desk from "@/components/site/Desk";
import { CONTACT_SECTION } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Free Career Audit — Greenroots, Kukatpally Hyderabad",
  description: CONTACT_SECTION.sub,
};

export default function ContactPage() {
  return <Desk />;
}
