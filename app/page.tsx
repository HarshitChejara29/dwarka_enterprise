import HVACSolutions from "./components/HVACSolutions";
import OurProducts from "./components/OurProducts";
import OurScope from "./components/OurScope";
import SectorsWeCover from "./components/SectorsWeCover";
import Testimonials from "./components/Testimonials";
import VideoSection from "./components/VideoSection";
import WhyDwarka from "./components/WhyDwarka";

export default function Home() {
  return (
    <>
    <VideoSection />
    <SectorsWeCover />
    <HVACSolutions />
    <OurProducts />
    <OurScope />
    <WhyDwarka />
    <Testimonials />
    </>
  );
}
