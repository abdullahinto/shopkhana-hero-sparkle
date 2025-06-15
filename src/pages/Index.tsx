
import HeroSection from "@/components/HeroSection";
import WhyShopKhana from "@/components/WhyShopKhana";
import HotPicks from "@/components/HotPicks";
import EmailOptIn from "@/components/EmailOptIn";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyShopKhana />
      <HotPicks />
      <EmailOptIn />
      <Testimonials />
    </div>
  );
};

export default Index;
