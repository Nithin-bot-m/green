import type { Metadata } from "next";
import Record from "@/components/site/Record";
import Partners from "@/components/site/Partners";
import Mentor from "@/components/site/Mentor";
import FieldNotes from "@/components/site/FieldNotes";
import CtaBand from "@/components/site/CtaBand";
import { PLACEMENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Placement Track Record — Greenroots Training & Placements",
  description: PLACEMENTS.sub,
};

export default function PlacementsPage() {
  return (
    <>
      <Record />
      <Partners />
      <Mentor />
      <FieldNotes />
      <CtaBand />
    </>
  );
}
