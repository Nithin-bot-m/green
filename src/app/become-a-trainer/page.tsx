import type { Metadata } from "next";
import Trainer from "@/components/site/Trainer";
import { TRAINER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Teach With Us — Trainer & Creator Applications — Greenroots",
  description: TRAINER.intro,
};

export default function BecomeTrainerPage() {
  return <Trainer />;
}
