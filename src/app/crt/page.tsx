import type { Metadata } from "next";
import Campus from "@/components/site/Campus";
import CtaBand from "@/components/site/CtaBand";
import { CRT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campus Recruitment Training (CRT) for Colleges — Greenroots",
  description: CRT.intro,
};

export default function CrtPage() {
  return (
    <>
      <Campus />
      <CtaBand />
    </>
  );
}
