import HeroSection from "../components/HeroSection";
import ColorizeImgSection from "../components/ColorizeImgSection/ColorizeImgSection";
import UpscaleImgSection from "../components/UpscaleImgSection";
import RemoveBgImgSection from "../components/RemoveBgImgSection.jsx";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ColorizeImgSection />
      <UpscaleImgSection />
      <RemoveBgImgSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </main>
  );
}
