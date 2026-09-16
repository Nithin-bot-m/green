import type { Metadata } from "next";
import SpecimenIndex from "@/components/site/SpecimenIndex";
import CtaBand from "@/components/site/CtaBand";
import { PROGRAMS_INTRO } from "@/lib/content";

export const metadata: Metadata = {
  title: "8 Job-Ready Programs — Greenroots Training & Placements",
  description: PROGRAMS_INTRO.sub,
};

export default function ProgramsPage() {
  return (
    <>
      <SpecimenIndex />
      <CtaBand />
    </>
  );
}
