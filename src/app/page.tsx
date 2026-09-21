import Hero from "@/components/site/Hero";
import Ledger from "@/components/site/Ledger";
import ProgramsShowcase from "@/components/site/ProgramsShowcase";
import Partners from "@/components/site/Partners";
import Mentor from "@/components/site/Mentor";
import CampusReels from "@/components/site/CampusReels";
import FieldNotes from "@/components/site/FieldNotes";
import Directory from "@/components/site/Directory";
import CtaBand from "@/components/site/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Ledger />
      <ProgramsShowcase />
      <Partners />
      <Mentor />
      <CampusReels />
      <FieldNotes limit={3} />
      <Directory />
      <CtaBand />
    </>
  );
}
