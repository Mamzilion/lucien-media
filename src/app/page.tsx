import { Navbar } from "@/components/Navbar";
import { Hero, Story, MediaBuying, Formation, Results, Method, Footer } from "@/components/Sections";
import { LeadMagnet, Faq, Booking, WhatsAppFloat } from "@/components/Interactive";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MediaBuying />
        <Formation />
        <Results />
        <Method />
        <LeadMagnet />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
