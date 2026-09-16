import Hero from "@/components/site/Hero";
import Ledger from "@/components/site/Ledger";
import Partners from "@/components/site/Partners";
import FieldNotes from "@/components/site/FieldNotes";
import Directory from "@/components/site/Directory";
import CtaBand from "@/components/site/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Ledger />
      <Partners />
      <FieldNotes limit={3} />
      <Directory />
      <CtaBand />
    </>
  );
}
