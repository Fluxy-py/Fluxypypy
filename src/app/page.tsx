import {
  Navbar,
  Hero,
  Services,
  WhyChooseUs,
  Portfolio,
  Process,
  Testimonials,
  CTA,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

