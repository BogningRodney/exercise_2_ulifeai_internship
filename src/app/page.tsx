import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import LaunchSection from "@/components/LaunchSection";
import SisyphusSection from "@/components/SisyphusSection";
import LogosSection from "@/components/logosSection";
import Navbar from "@/components/navbar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col justify-center"> 
      <Introduction />
      </div>
      <LogosSection />
      <FeatureSection />
      <SisyphusSection />
      <FeaturesSection />
      <FAQSection />
      <LaunchSection />
      <Footer />
    </main>
  );
}
