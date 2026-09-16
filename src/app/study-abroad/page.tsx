import type { Metadata } from "next";
import Atlas from "@/components/site/Atlas";
import { ABROAD } from "@/lib/content";

export const metadata: Metadata = {
  title: "Study Abroad with SIG Global Edu — Greenroots Training & Placements",
  description: ABROAD.intro,
};

export default function StudyAbroadPage() {
  return <Atlas />;
}
