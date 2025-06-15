
import HeroSection from "@/components/HeroSection";
import WhyShopKhana from "@/components/WhyShopKhana";
import HotPicks from "@/components/HotPicks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import EmailOptIn from "@/components/EmailOptIn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyShopKhana />
      <HotPicks />
      <Testimonials />
      <FinalCTA />
      <EmailOptIn />
      <Footer />
    </div>
  );
};

export default Index;
