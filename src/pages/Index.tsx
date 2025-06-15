
import HeroSection from "@/components/HeroSection";
import WhyShopKhana from "@/components/WhyShopKhana";
import HotPicks from "@/components/HotPicks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import EmailOptIn from "@/components/EmailOptIn";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyShopKhana />
      <HotPicks />
      <Testimonials />
      <FinalCTA />
      <EmailOptIn />
    </div>
  );
};

export default Index;
