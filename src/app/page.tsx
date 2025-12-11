import FeaturesGrid  from "@/components/features-grid";
import { Footer } from "@/components/footer";
import {HeroSection}  from "@/components/hero-section";
import {Navbar}  from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}
