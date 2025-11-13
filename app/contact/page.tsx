import Branches from "../components/Branches";
import ContactHero from "../components/ContactHero";
import ContactInfoSection from "../components/ContactInfoSection";
import ContactSection from "../components/ContactSection";
import ServiceIconsBar from "../components/ServiceIconsBar";

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <ServiceIconsBar />
      <ContactInfoSection />
      <Branches />
    </main>
    );
}