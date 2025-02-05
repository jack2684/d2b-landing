import AboutUs from "@/components/about-us";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Features />
        <AboutUs />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
